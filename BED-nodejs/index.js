// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import rateLimit from 'express-rate-limit';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
// import dotenv from 'dotenv';

// import authRoutes from './routes/auth.routes.js';
// import { initMySQL } from './utils/db.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use(helmet({ contentSecurityPolicy: false }));

// // Rate limiting
// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
// app.use(limiter);

// // MySQL connection
// try {
//   const mysqlPool = await initMySQL();
//   app.locals.mysqlPool = mysqlPool;
//   console.log('✅ MySQL connected successfully');
// } catch (err) {
//   console.error('❌ MySQL connection failed:', err.message);
//   process.exit(1);
// }

// // Routes
// app.use('/api', authRoutes);

// app.get('/', (req, res) => {
//   res.json({ message: 'Server is running successfully!', status: 200 });
// });


import express from "express";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();
const app = express();
app.use(express.json({ strict: false }));

// ✅ MySQL Connection
const pool = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bed_db",
});

// ✅ Secret Key
const SECRET_KEY = "supersecretkey"; // Use process.env.JWT_SECRET in production

// ✅ Helper: Generate unique Member ID
function generateMemberId() {
  return "MEM" + crypto.randomBytes(5).toString("hex").toUpperCase();
}

// ✅ Middleware: Verify JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader)
    return res.status(401).json({ message: "Missing Authorization header" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing token" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid or expired token" });
    req.user = decoded;
    next();
  });
}

// ✅ Register API (requires JWT)
app.post("/api/register", verifyToken, async (req, res) => {
  try {
    const { member_type, name, email, phone, profile_picture, address } = req.body;

    if (!member_type || !name || !email || !phone || !address) {
      return res.status(400).json({
        message:
          "All fields (member_type, name, email, phone, address) are required",
      });
    }

    // ✅ Check if email or phone already exists
    const [existing] = await pool.execute(
      "SELECT * FROM members WHERE email = ? OR phone = ?",
      [email, phone]
    );

    if (existing.length > 0) {
      return res
        .status(409)
        .json({ message: "Member already registered with this email or phone" });
    }

    const member_id = generateMemberId();

    // ✅ Insert into members table
    await pool.execute(
      `INSERT INTO members (member_id, member_type, name, email, phone, profile_picture, address)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        member_id,
        member_type,
        name,
        email,
        phone,
        profile_picture || null,
        address,
      ]
    );

    // ✅ Log registration in member_logs
    const ip_address = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const data = JSON.stringify({
      member_type,
      name,
      email,
      phone,
      profile_picture,
      address,
    });
    const timestamp = new Date();

    await pool.execute(
      `INSERT INTO member_logs (action, member_id, name, email, phone, ip_address, timestamp, data)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ["REGISTER", member_id, name, email, phone, ip_address, timestamp, data]
    );

    res.status(201).json({
      message: "✅ Member registered successfully",
      member_id,
      data: { member_type, name, email, phone, profile_picture, address },
    });
  } catch (err) {
    console.error("Error in /register:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ Delete API (DELETE or POST)
app.all("/api/delete", verifyToken, async (req, res) => {
  if (req.method !== "DELETE" && req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, phone } = req.body;

    if (!email || !phone) {
      return res
        .status(400)
        .json({ message: "Email and phone are required to delete a member" });
    }

    // ✅ Check if member exists
    const [member] = await pool.execute(
      "SELECT * FROM members WHERE email = ? AND phone = ?",
      [email, phone]
    );

    if (member.length === 0) {
      return res
        .status(404)
        .json({ message: "❌ No member found with this email and phone" });
    }

    const member_id = member[0].member_id;

    // ✅ Delete from members table
    await pool.execute("DELETE FROM members WHERE member_id = ?", [member_id]);

    // ✅ Log deletion in member_logs
    const ip_address = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const timestamp = new Date();
    const data = JSON.stringify(member[0]);

    await pool.execute(
      `INSERT INTO member_logs (action, member_id, name, email, phone, ip_address, timestamp, data)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ["DELETE", member_id, member[0].name, email, phone, ip_address, timestamp, data]
    );

    res.status(200).json({
      message: "🗑️ Member deleted successfully",
      deleted_member_id: member_id,
      email,
      phone,
    });
  } catch (err) {
    console.error("Error in /delete:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ Token generator for testing
app.get("/api/generate-token", (req, res) => {
  const token = jwt.sign({ role: "admin" }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// ✅ Start Server
app.listen(5000, () => console.log("✅ Server running on port 5000"));

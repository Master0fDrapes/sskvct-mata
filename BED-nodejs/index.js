// index.js - Entry Point
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { initMySQL } from './utils/db.js';
import memberRoutes from './routes/memberRoutes.js';
import authRoutes from './routes/auth.routes.js';

// import { connectMongo } from './utils/mango.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------- Middleware -------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet({ contentSecurityPolicy: false }));
app.use('/uploads', express.static('uploads'));

app.use('/api/members', memberRoutes);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// ------------------- DB Connection -------------------

// await connectMongo(); // MongoDB
const mysqlPool = await initMySQL(); // MySQL
app.locals.mysqlPool = mysqlPool;

// ------------------- Routes -------------------

app.use('/api', authRoutes);

// ------------------- Default Route -------------------
app.get('/', (req, res) => {
  res.json({
    message: 'Success',
    status: 200
  });
});

// ------------------- Start Server -------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

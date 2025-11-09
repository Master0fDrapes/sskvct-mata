// controllers/auth.controller.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// Dummy login (replace with DB validation later)
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Replace this with your DB validation logic
  if (email !== 'admin@example.com' || password !== 'password123') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT
  const token = jwt.sign(
    { email, role: 'admin' }, // payload
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ message: 'Login successful', token });
};


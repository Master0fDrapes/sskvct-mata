import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { createMember, findMemberByEmail } from '../models/member.model.js';

dotenv.config();

export const registerMember = async (req, res) => {
  try {
    const pool = req.app.locals.mysqlPool;
    const { name, email, phone, member_type, address, profile_picture } = req.body;

    if (!name || !email || !phone || !member_type) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingUser = await findMemberByEmail(pool, email);
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Save to DB
    await createMember(pool, { name, email, phone, member_type, address, profile_picture });

    // Generate JWT
    const token = jwt.sign(
      { email, name, member_type },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(201).json({
      message: '✅ Registration successful',
      token,
    });
  } catch (error) {
    console.error('Error in registerMember:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

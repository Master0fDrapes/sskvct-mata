// controllers/memberController.js
import { createMember, createMemberLog, deleteMember as deleteMemberModel } from '../models/memberModel.js';
import { v4 as uuidv4 } from 'uuid';

export const registerMember = async (req, res) => {
  try {
    const { member_type, name, email, phone, address } = req.body;
    const profile_picture = req.file ? req.file.filename : null;

    if (!member_type || !name || !email || !phone) {
      return res.status(400).json({ message: 'Required fields missing' });
    }
    const member_id = 'MEM-' + uuidv4().split('-')[0];

    await createMember({
      member_id,
      member_type,
      name,
      email,
      phone,
      profile_picture,
      address,
    });

    // ✅ Log creation
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    await createMemberLog('REGISTER', {
      member_id,
      member_type,
      name,
      email,
      phone,
      profile_picture,
      address,
    }, ip);

    res.status(201).json({ message: 'Member registered', member_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};

// ✅ Signout (delete user)
export const signOutMember = async (req, res) => {
  try {
    const { email, phone } = req.body;

    if (!email || !phone) {
      return res.status(400).json({ message: 'Email and phone required' });
    }

    const result = await deleteMemberModel(email, phone);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // ✅ Log deletion
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    await createMemberLog('DELETE', { email, phone }, ip);

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};

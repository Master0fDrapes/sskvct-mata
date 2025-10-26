import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = 'supersecretkey'; // move to .env

const staticUser = {
  username: 'testuser',
  passwordHash: bcrypt.hashSync('password123', 8),
  role: 'admin',
};

export async function login(req, res) {
  const { username, password } = req.body;

  if (username !== staticUser.username) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const validPassword = await bcrypt.compare(password, staticUser.passwordHash);
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { username: staticUser.username, role: staticUser.role },
    SECRET_KEY,
    { expiresIn: '2h' }
  );
 
  res.json({
    username: staticUser.username,
    role: staticUser.role,
    token,
  });
}
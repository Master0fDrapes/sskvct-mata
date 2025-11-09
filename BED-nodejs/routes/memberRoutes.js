import express from 'express';
// import { registerMember } from '../controllers/memberController.js';
import { registerMember, signOutMember } from '../controllers/memberController.js';

import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post('/register', upload.single('profile_picture'), registerMember);
router.post('/signout', signOutMember);

export default router;

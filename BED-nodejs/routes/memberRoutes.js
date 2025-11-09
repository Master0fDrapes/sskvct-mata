<<<<<<< HEAD
import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  registerMember,
  deleteMemberByEmailPhone,
  generateToken,
} from "../controllers/memberController.js";

const router = express.Router();

router.post("/register", verifyToken, registerMember);
router.all("/delete", verifyToken, deleteMemberByEmailPhone);
router.get("/generate-token", generateToken);
=======
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
>>>>>>> 88f2b4b910086f59842134455e987825b0c588b8

export default router;

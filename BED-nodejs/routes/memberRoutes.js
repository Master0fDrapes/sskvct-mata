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

export default router;

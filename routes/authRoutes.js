// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser); // POST /auth/register
router.post('/login', loginUser); // POST /auth/login

export default router;

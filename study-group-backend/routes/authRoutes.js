// routes/authRoutes.js
import express from 'express';
import { createAccount, login } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createAccount);
router.post('/login', login);

router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: "This is protected data", user: req.user });
});

export default router;

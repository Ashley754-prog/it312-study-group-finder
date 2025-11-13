import express from 'express';
import { createAccount, login, verifyAccount } from '../controllers/authController.js';

const router = express.Router();

router.post('/', createAccount);
router.post('/login', login);
router.post('/verify', verifyAccount);

export default router;

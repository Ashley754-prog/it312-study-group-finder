import express from 'express';
import { createAccount, login, googleAuth } from '../controllers/authController.js';

const router = express.Router();

router.post('/', createAccount);
router.post('/login', login);

router.post('/google', googleAuth);

export default router;

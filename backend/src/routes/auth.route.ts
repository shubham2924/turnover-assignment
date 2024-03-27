import express from 'express';
const router = express.Router();
import { authController } from '../controllers';
router.post('/register', authController.register);
router.post('/verify-account', authController.verifyAccount);
router.post('/login', authController.login);
export default router;
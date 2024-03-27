import express from 'express';
const router = express.Router();
import { categoryController } from '../controllers';
router.post('/checklist', categoryController.checklist);
export default router;
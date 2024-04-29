import { Router } from 'express';
import { login, logout, register } from '../controllers/authController';
import { isAuthenticated } from '../middlewares/authMiddleware';
import userRouter from './userRouter';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.use('/users', isAuthenticated, userRouter);

export default router;
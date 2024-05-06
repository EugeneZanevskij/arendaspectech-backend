import { Router } from 'express';
import { login, logout, register } from '../controllers/authController';
import { isAuthenticated, isAuthorized } from '../middlewares/authMiddleware';
import userRouter from './userRouter';
import servicesRouter from './servicesRouter';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.use('/users', isAuthenticated, userRouter);
router.use('/admin/services', isAuthenticated, isAuthorized, servicesRouter);

export default router;
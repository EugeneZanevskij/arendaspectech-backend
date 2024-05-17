import { Router } from 'express';
import { login, logout, register } from '../controllers/authController';
import { isAuthenticated, isAuthorized } from '../middlewares/authMiddleware';
import userRouter from './userRouter';
import servicesRouter from './servicesRouter';
import equipmentTypeRouter from './equipmentTypeRouter';
import equipmentRouter from './equipmentRouter';
import equipmentToServicesRouter from './equipmentToServicesRouter';
import statusRouter from './statusRouter';
import bookingRouter from './bookingRouter';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.use('/users', isAuthenticated, userRouter);
router.use('/admin/services', isAuthenticated, servicesRouter);
router.use('/admin/equipment-type', equipmentTypeRouter);
router.use('/admin/equipment', equipmentRouter);
router.use('/admin/equipment-to-services', isAuthenticated, equipmentToServicesRouter);
router.use('/admin/status', isAuthenticated, statusRouter);
router.use('/admin/bookings', bookingRouter);

export default router;
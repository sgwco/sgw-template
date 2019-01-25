import { Router } from 'express';
import templateRouter from './template';
import authRouter from './auth';

const router = Router();
router.use('/template', templateRouter);
router.use('/auth', authRouter);

export default router;

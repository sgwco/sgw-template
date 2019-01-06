import { Router } from 'express';
import templateRouter from './template';

const router = Router();
router.use('/template', templateRouter);

export default router;

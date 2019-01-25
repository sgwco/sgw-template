import { Router } from 'express';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import models from '../models';
import { query, body } from 'express-validator/check';
import { checkValid } from '../middlewares/express-validator';
import { tryCatch } from '../middlewares/error-handler';

const router = Router();

/**
 * @desc Authorization users when login
 * @param string email
 * @param string password
 * @return accessToken, refreshToken
 */
router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Email không hợp lệ.'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Mật khẩu không hợp lệ.'),
  ],
  checkValid,
  tryCatch(async (req, res) => {
    const { email, password } = req.body;
    const user = await models.users.findOne({
      where: { $and: [{ email }, { password: md5(password) }] },
      raw: true,
    });
    if (!user) {
      throw { status: 404, message: 'Tài khoản hoặc mật khẩu không chính xác.' };
    }
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const refreshToken = jwt.sign(user, process.env.REFRESH_JWT_SECRET, {
      expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
    });
    res.status(200).json({ accessToken, refreshToken });
  })
);

router.get(
  '/refresh',
  [
    query('refreshToken')
      .not()
      .isEmpty()
      .withMessage('Refresh token không được để trống'),
  ],
  checkValid,
  tryCatch(async (req, res) => {
    const { refreshToken } = req.query;
    const user = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({ accessToken });
  })
);

export default router;

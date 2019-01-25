import { validationResult } from 'express-validator/check';

export function checkValid(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw { status: 401, message: errors.array()[0].msg };
  } else {
    next();
  }
}

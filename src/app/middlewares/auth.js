import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provider' });
  }
  const [, token] = authHeader.split(' ');

  try {
    const decored = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decored.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  console.log(authHeader);
  return next();
};

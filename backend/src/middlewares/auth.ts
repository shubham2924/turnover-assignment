import jwt from 'jsonwebtoken';
import config from '../config/config'
import { Request, Response, NextFunction } from 'express';
interface CustomRequest extends Request {
    payload?: any; // Define the payload property
}
const verifyToken = (req:CustomRequest, res:Response, next:NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access token not provided' });
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret as string);
    req.payload = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default { verifyToken };

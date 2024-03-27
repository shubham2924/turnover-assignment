
import jwt from 'jsonwebtoken';
import config from '../config/config'
const generateToken = (
    userId: number
  ): string => {
    const payload = {
      sub: userId
    };
    return jwt.sign(payload, config.jwtSecret as string, { expiresIn: '2d' });
  };

  export default {
    generateToken
  }
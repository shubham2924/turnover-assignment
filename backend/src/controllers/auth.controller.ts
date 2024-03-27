import { userService, tokenService } from "../services";
import { Request, Response } from 'express';
const register = async (req:Request, res:Response) => {
    const { email, password } = req.body;
    const user = await userService.createUser(email, password);
    const tokens = await tokenService.generateToken(user.id);
    res.status(200).json({user, tokens });
  };
const verifyAccount = async (req:Request, res:Response) => {
    const { otp, userId } = req.body;
    if (otp !== '12345678') {
        return res.status(400).json({ message: 'Invalid OTP' });
      }
    const user = await userService.verifyUser(otp, userId);
    res.status(200).json({user});
  };
const login = async (req:Request, res:Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('You must provide an email and a password.');
      }
    const user = await userService.login(email, password);
    const token = await tokenService.generateToken(user.id);
    res.status(200).json({user, token});
  };

export default {
register,
verifyAccount,
login
}
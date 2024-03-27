import prisma from '../client';
import { encryptPassword, isPasswordMatch } from '../utils/encryption';
const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}
const createUser = async (email: string,
  password: string,
  name?: string) => {
  if (await getUserByEmail(email)) {
    throw new Error('Email already in use.');
  }
  return prisma.user.create({
    data: {
      email,
      name,
      password: await encryptPassword(password)
    }
  });
}

const verifyUser = async (otp: number, userId: number) => {
  return prisma.user.update({
    where: { id: userId },
    data: { isEmailVerified: true },
  });
}
const login = async (email: string, password: string) => {
  const userExists = await prisma.user.findUnique({ where: { email } });
  if(!userExists){
    throw new Error('User does not exists');
  }
  const passwordMatch = await isPasswordMatch(password, userExists.password as string)
  if(!passwordMatch){
    throw new Error('Incorrect Password');
  }
  return userExists;
}
export default {
  createUser,
  verifyUser,
  login
}

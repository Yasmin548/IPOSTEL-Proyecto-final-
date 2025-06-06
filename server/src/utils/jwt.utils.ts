import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config()

const SECRET = process.env.SECRET || 'UnhijueputaSecreto';

interface payload {
  user: string;
  email: string;
  rol: string;
}

export const Token = (payload: payload): string => {
  return jwt.sign(payload, SECRET, { expiresIn: "30m" });
}

export const verifyData = (token:string)=>{
  return jwt.verify(token,SECRET) as payload
}
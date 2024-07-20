import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();

export const transporter = nodemailer.createTransport({
  service: process.env.HOST,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

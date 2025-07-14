import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import type { Request, Response } from 'express';

const prisma = new PrismaClient();

const signupHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(409).json({ message: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword }
    });

    return res.status(201).json({ message: 'Signup successful', userId: newUser.id });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default signupHandler;

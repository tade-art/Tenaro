import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';

const prisma = new PrismaClient();

export default async function createTask(req: Request, res: Response) {
  try {
    const { title, priority, userId } = req.body;

    if (!title || !priority || !userId) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        priority,
        completed: false,
        user: {
          connect: { id: userId },
        },
      },
    });

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
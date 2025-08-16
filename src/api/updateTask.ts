import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';

const prisma = new PrismaClient();

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, priority, completed } = req.body;

  try {
    const existing = await prisma.task.findUnique({ where: { id } });

    if (!existing) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const updated = await prisma.task.update({
      where: { id },
      data: {
        title,
        priority,
        completed
      },
    });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

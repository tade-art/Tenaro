import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';

const prisma = new PrismaClient();

export default async function getTasks(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const tasks = await prisma.task.findMany({
      where: { userId: id },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
}
import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    if (!userId) {
      return res.status(400).json({ error: "Missing userId" });
    }

    const tasks = await prisma.task.findMany({
      where: { userId },
    });

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;
    const incompleteTasks = totalTasks - completedTasks;

    const priorityDist = ["High", "Medium", "Low"].map((level) => ({
      priority: level,
      count: tasks.filter((t) => t.priority === level).length,
    }));
    
    const lineDataMap: { [key: string]: number } = {};
    tasks
      .filter((t) => t.completed)
      .forEach((task) => {
        const date = task.updatedAt.toISOString().split("T")[0]; // yyyy-mm-dd
        lineDataMap[date] = (lineDataMap[date] || 0) + 1;
      });
    const lineData = Object.entries(lineDataMap).map(([date, count]) => ({
      date,
      count,
    }));

    return res.status(200).json({
      totalTasks,
      completedTasks,
      incompleteTasks,
      priorityDist,
      lineData,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

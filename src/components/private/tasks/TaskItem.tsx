import { motion } from 'framer-motion';
import type { Task } from '../../../util/TaskTypes';

export default function TaskItem({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
}: {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      className="bg-[var(--color-card-bg)] border rounded-md p-4 mb-2 flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="accent-[var(--color-accent)]"
        />
        <div>
          <h3 className={`text-md font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </h3>
          <p className="text-sm text-gray-500">Priority: {task.priority}</p>
        </div>
      </div>
      <div className="space-x-2">
        <button onClick={() => onEdit(task)} className="text-sm text-blue-500 hover:underline">Edit</button>
        <button onClick={() => onDelete(task.id)} className="text-sm text-red-500 hover:underline">Delete</button>
      </div>
    </motion.div>
  );
}

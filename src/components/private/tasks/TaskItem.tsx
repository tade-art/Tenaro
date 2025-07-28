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
      className="bg-[var(--color-card-bg)] border border-[var(--color-accent)] rounded-md p-4 mb-2 flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="accent-[var(--color-accent)] w-4 h-4"
        />
        <div>
          <h3 className={`text-md font-medium ${task.completed ? 'line-through text-muted' : 'text-foreground'}`}>
            {task.title}
          </h3>
          <p className="text-sm text-muted-foreground">Priority: {task.priority}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 text-sm rounded-md transition-colors border border-transparent
                     bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 text-sm rounded-md transition-colors border border-transparent
                     bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

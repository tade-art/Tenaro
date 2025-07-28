import { AnimatePresence } from 'framer-motion';
import type { Task } from '../../../util/TaskTypes';
import TaskItem from './TaskItem';

type Props = {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

export default function TaskList({ tasks, onToggleComplete, onDelete, onEdit }: Props) {
  if (tasks.length === 0)
    return <p className="text-muted-foreground">No tasks available.</p>;

  return (
    <div className="space-y-4 mt-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

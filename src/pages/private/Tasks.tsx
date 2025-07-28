import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Navbar from '../../components/general/Navbar';
import SettingsModal from '../../components/private/settings/SettingsModal';
import FilterBar from '../../components/private/tasks/FilterBar';
import TaskList from '../../components/private/tasks/TaskList';
import TaskModal from '../../components/private/tasks/TaskModal';
import type { Task } from '../../util/TaskTypes';

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Incomplete'>('All');
  const [sort, setSort] = useState<'Title' | 'Priority'>('Title');
  const [showSettings, setShowSettings] = useState(false);

  const handleAdd = (taskData: Omit<Task, 'id' | 'completed'>) => {
    const newTask: Task = {
      ...taskData,
      id: uuid(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleEdit = (updatedTask: Task) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    setEditTask(null);
  };

  const handleDelete = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'Completed') return t.completed;
    if (filter === 'Incomplete') return !t.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'Priority') {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <div className="flex min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar onSettingsClick={() => setShowSettings(true)} />
        <main className="ml-64 w-full p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">📋 My Tasks</h1>
            <button
              onClick={() => setShowModal(true)}
              className="transition bg-[var(--color-accent)] hover:opacity-90 text-white px-4 py-2 rounded shadow"
            >
              + Add Task
            </button>
          </div>
          <FilterBar
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />
          <TaskList
            tasks={sortedTasks}
            onEdit={setEditTask}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        </main>
      </div>
      {(showModal || editTask) && (
        <TaskModal
          onClose={() => {
            setShowModal(false);
            setEditTask(null);
          }}
          onSubmit={editTask ? handleEdit : handleAdd}
          existingTask={editTask}
        />
      )}
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

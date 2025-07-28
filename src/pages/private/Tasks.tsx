import { useEffect, useRef, useState } from 'react';
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
  const didInitRef = useRef(false); 

  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;
    try {
      const raw = localStorage.getItem('tasks');
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter(t => t && t.id && t.title && t.priority);
        setTasks(cleaned);
      }
    } catch (err) {
      console.error('[DEBUG] Failed to load tasks:', err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (data: Omit<Task, 'id' | 'completed'>) => {
    const newTask: Task = {
      ...data,
      id: uuid(),
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
    setShowModal(false);
  };

  const handleEdit = (updated: Task) => {
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
    setEditTask(null);
  };

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'All' ? true :
    filter === 'Completed' ? task.completed :
    !task.completed
  );

  const sortedTasks = [...filteredTasks].sort((a, b) =>
    sort === 'Priority'
      ? priorityOrder[a.priority] - priorityOrder[b.priority]
      : a.title.localeCompare(b.title)
  );

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

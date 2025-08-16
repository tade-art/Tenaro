import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const fetchTasks = async () => {
      const id = localStorage.getItem('id');
      if (!id) return;

      try {
        const res = await fetch(`/api/tasks/${id}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setTasks(data);
        }
      } catch (err) {
        console.error('Error fetching tasks: ', err);
      }
    };

    fetchTasks();
  }, []);

  const handleAdd = async (data: Omit<Task, 'id' | 'completed'>) => {
    const userId = localStorage.getItem('id');
    if (!userId){
      return;
    }

    try {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, userId }),
      });

      if (!res.ok) throw new Error('Failed to create task');

      const newTask: Task = await res.json();
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      console.error('Error in adding a task: ', err);
    }

    setShowModal(false);
  };

  const handleEdit = async (updated: Task) => {
    try {
      const res = await fetch(`/api/tasks/${updated.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });

      if (!res.ok) throw new Error('Failed to update task');

      const newTask: Task = await res.json();
      setTasks(prev => prev.map(task => (task.id === newTask.id ? newTask : task)));
    } catch (err) {
      console.error('Error in editing a task: ', err);
    }

    setEditTask(null);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      console.error('Error in deleting a task: ', err);
    }
  };

  const handleToggleComplete = async (id: string) => {
    const current = tasks.find(t => t.id === id);
    if (!current) return;

    const updated = { ...current, completed: !current.completed };
    await handleEdit(updated);
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'All' ||
    (filter === 'Completed' && task.completed) ||
    (filter === 'Incomplete' && !task.completed)
  );

  const sortedTasks = [...filteredTasks].sort((a, b) =>
    sort === 'Priority'
      ? (priorityOrder[a.priority] ?? 4) - (priorityOrder[b.priority] ?? 4)
      : (a.title ?? '').localeCompare(b.title ?? '')
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

          <FilterBar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

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

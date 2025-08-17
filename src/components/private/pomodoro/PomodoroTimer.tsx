import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import TimerControls from './TimerControls';

export default function PomodoroTimer() {
  const defaultDuration = 25 * 60;
  const breakDuration = 5 * 60;

  const [isRunning, setIsRunning] = useState(() => localStorage.getItem('isRunning') === 'true');
  const [onBreak, setOnBreak] = useState(() => localStorage.getItem('onBreak') === 'true');

  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = parseInt(localStorage.getItem('timeLeft') || '0');
    return isNaN(stored) || stored > defaultDuration ? defaultDuration : stored;
  });

  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const [selectedTaskTitle, setSelectedTaskTitle] = useState('');

  const duration = onBreak ? breakDuration : defaultDuration;
  const progress = Math.min(100, 100 - (timeLeft / duration) * 100);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = localStorage.getItem('id');
        const res = await fetch(`/api/tasks/${userId}`);
        const data = await res.json();
        const incomplete = data.filter((task: any) => task.completed === false);
        setTasks(incomplete);
      } catch (err) {
        console.error('Failed to fetch tasks:', err);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem('timeLeft', timeLeft.toString());
    localStorage.setItem('onBreak', onBreak.toString());
    localStorage.setItem('isRunning', isRunning.toString());

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onBreak]);

  const handleSelectTask = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedTaskId(id);
    const task = tasks.find((t: any) => t.id === id);
    setSelectedTaskTitle(task?.title || '');
  };

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="flex justify-center items-center min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] px-4">
      <div className="w-full max-w-6xl p-12 rounded-2xl bg-[var(--color-box)] shadow-2xl border border-[var(--color-border)] space-y-12">
        <h1 className="text-5xl font-extrabold text-center tracking-tight">Pomodoro Timer</h1>
        <div className="flex flex-col items-center justify-center space-y-6">
          <ProgressBar progress={progress} />
          <div className="text-center">
            <div className="text-8xl font-bold tracking-widest">
              {minutes}:{seconds}
            </div>
            <p className="text-lg text-[var(--color-subtle)]">
              {onBreak ? 'Break Time' : 'Focus Time'}
            </p>
          </div>
          <TimerControls isRunning={isRunning} setIsRunning={setIsRunning} />
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <label className="text-xl font-semibold block mb-2">What task are you working on?</label>
          <select
            value={selectedTaskId}
            onChange={handleSelectTask}
            className="w-full p-4 text-lg rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          >
            <option value="" disabled className="text-[var(--color-muted)]">
              Choose a task
            </option>
            {tasks.map((task: any) => (
              <option key={task.id} value={task.id}>
                {task.title}
              </option>
            ))}
          </select>
          {selectedTaskTitle && (
            <p className="text-center text-[var(--color-accent)] mt-3">
              You are working on: <span className="font-bold">{selectedTaskTitle}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

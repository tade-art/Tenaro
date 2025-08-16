import { useEffect, useRef, useState } from 'react';
import TimerControls from './TimerControls';

const WORK_TIME = 1 * 60; // 25 minutes
const BREAK_TIME = 5 * 60; // 5 minutes

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            setIsBreak(prevBreak => {
              const newIsBreak = !prevBreak;
              setTimeLeft(newIsBreak ? BREAK_TIME : WORK_TIME);
              return newIsBreak;
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-center px-4">
      <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-xl shadow-lg p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-2">{isBreak ? 'Break Time' : 'Focus Time'}</h1>
        <p className="text-sm text-[var(--color-subtle-text)] mb-6">{isBreak ? 'Take a short rest.' : 'Time to focus and be productive!'}</p>

        <div className="text-6xl font-mono font-bold mb-6 text-[var(--color-accent)]">
          {formatTime(timeLeft)}
        </div>

        <TimerControls
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          reset={() => {
            setIsRunning(false);
            setTimeLeft(isBreak ? BREAK_TIME : WORK_TIME);
          }}
        />
      </div>
    </div>
  );
}

import React from 'react';

interface Props {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TimerControls({ isRunning, setIsRunning }: Props) {
  const handleReset = () => {
    localStorage.removeItem('timeLeft');
    localStorage.removeItem('onBreak');
    localStorage.removeItem('isRunning');
    window.location.reload(); // reset
  };

  return (
    <div className="flex gap-4 justify-center mt-4">
      <button className="btn-primary px-4 py-2 rounded" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button className="btn-secondary px-4 py-2 rounded" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

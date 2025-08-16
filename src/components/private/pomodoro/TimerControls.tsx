
interface Props {
  isRunning: boolean;
  setIsRunning: (v: boolean) => void;
  reset: () => void;
}

export default function TimerControls({ isRunning, setIsRunning, reset }: Props) {
  return (
    <div className="flex justify-center gap-4">
      <button
        className="btn-primary"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        className="btn-secondary"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

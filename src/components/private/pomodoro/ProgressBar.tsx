interface Props {
  progress: number; // between 0 and 1
}

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="w-full h-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-secondary)] overflow-hidden">
      <div
        className="h-full bg-[var(--color-accent)] transition-all duration-500"
        style={{ width: `${progress}%`, transition: 'width 1s linear' }}
      />
    </div>
  );
}

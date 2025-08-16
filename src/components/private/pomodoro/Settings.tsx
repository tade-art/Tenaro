interface SettingsProps {
  workDuration: number;
  breakDuration: number;
  setWorkDuration: (s: number) => void;
  setBreakDuration: (s: number) => void;
}

export default function Settings({ workDuration, breakDuration, setWorkDuration, setBreakDuration }: SettingsProps) {
  return (
    <div className="flex gap-6 mt-6">
      <div>
        <label className="block text-sm mb-1 text-white">Work (min)</label>
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(+e.target.value)}
          className="px-2 py-1 rounded bg-white/10 text-white w-20"
        />
      </div>
      <div>
        <label className="block text-sm mb-1 text-white">Break (min)</label>
        <input
          type="number"
          value={breakDuration}
          onChange={(e) => setBreakDuration(+e.target.value)}
          className="px-2 py-1 rounded bg-white/10 text-white w-20"
        />
      </div>
    </div>
  );
}

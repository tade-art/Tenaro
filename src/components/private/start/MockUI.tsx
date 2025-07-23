export const mock = {
  tasks: (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-4 shadow-md space-y-2 w-full max-w-md">
      <div className="font-semibold text-[var(--color-text)] mb-2">Today's Tasks</div>
      <ul className="space-y-2 text-sm">
        {['Write report', 'Study React', 'Gym workout'].map((task, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-[var(--color-border)]" />
            <span className="text-[var(--color-text)]">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  ),

  timer: (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-md text-center w-full max-w-md">
      <div className="text-sm text-[var(--color-subtle-text)] mb-1">Focus Session</div>
      <div className="text-5xl font-mono text-[var(--color-text)]">23:14</div>
      <button className="mt-4 btn-primary px-4 py-2 text-sm">Pause</button>
    </div>
  ),

  analytics: (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-md w-full max-w-md space-y-4">
      <div className="font-semibold text-[var(--color-text)]">This Week</div>
      <div className="flex gap-2 items-end h-24">
        {[50, 80, 40, 100, 70, 90, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded bg-[var(--color-accent)]"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>
      <div className="text-xs text-[var(--color-subtle-text)] text-center">Mon – Sun</div>
    </div>
  ),
};

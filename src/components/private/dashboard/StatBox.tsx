export default function StatBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-6 rounded-xl bg-[var(--color-box)] border border-[var(--color-border)] shadow-md text-center">
      <div className="text-3xl font-bold text-[var(--color-text)]">{value}</div>
      <div className="text-sm mt-1 text-[var(--color-subtle)]">{label}</div>
    </div>
  );
}

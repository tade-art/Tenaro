import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function PriorityBarChart({ data }: { data: { priority: string; count: number }[] }) {
  return (
    <div className="bg-[var(--color-box)] p-6 rounded-xl shadow-md border border-[var(--color-border)]">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="priority" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

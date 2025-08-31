import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function CompletionLineChart({ data }: { data: { date: string; count: number }[] }) {
  return (
    <div className="bg-[var(--color-box)] p-6 rounded-xl shadow-md border border-[var(--color-border)]">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="var(--color-accent)" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

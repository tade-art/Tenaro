import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis, YAxis
} from 'recharts';

export default function PriorityBarChart({ data }: { data: { priority: string; count: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="priority" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

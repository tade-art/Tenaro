import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

interface PieChartProps {
  data: { name: string; value: number }[] | undefined;
}

const COLORS = ["#4ade80", "#f87171"];

export default function CustomPieChart({ data }: PieChartProps) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-center text-sm text-gray-500 dark:text-gray-400">No data to display</p>;
  }

  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  const pieData = data.map((entry) => ({
    ...entry,
    percentage: ((entry.value / total) * 100).toFixed(0),
  }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={({ name, percentage }) => `${name} (${percentage}%)`}
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          height={36}
          formatter={(value) => (
            <span className="text-sm text-gray-700 dark:text-gray-300">{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

interface Props {
  data: { name: string; value: number }[];
  title?: string;
}

const COLORS = ['#4ADE80', '#F87171'];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="var(--color-text)"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
    >
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

const CustomPieChart: React.FC<Props> = ({ data, title = "Task Completion Ratio" }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const safeData = total === 0 ? [{ name: 'No Data', value: 1 }] : data;

  return (
    <div className="bg-[var(--color-box)] border border-[var(--color-border)] rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-[var(--color-text)]">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={safeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            dataKey="value"
          >
            {safeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;

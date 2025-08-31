import { useEffect, useState } from 'react';
import Loading from '../../components/general/Loading';
import Navbar from '../../components/general/Navbar';
import BarChart from '../../components/private/dashboard/BarChart';
import LineChart from '../../components/private/dashboard/LineChart';
import PieChart from '../../components/private/dashboard/PieChart';
import StatBox from '../../components/private/dashboard/StatBox';
import SettingsModal from '../../components/private/settings/SettingsModal';

interface PriorityData {
  priority: string;
  count: number;
}

interface LineChartData {
  date: string;
  count: number;
}

export default function Dashboard() {
  const [priorityDist, setPriorityDist] = useState<PriorityData[]>([]);
  const [lineData, setLineData] = useState<LineChartData[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    incompleteTasks: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("id");
      if (!userId) return;

      try {
        const res = await fetch(`/api/dashboard/${userId}`);
        const data = await res.json();

        setStats({
          totalTasks: data.totalTasks,
          completedTasks: data.completedTasks,
          incompleteTasks: data.incompleteTasks,
        });
        setPriorityDist(data.priorityDist || []);
        setLineData(data.lineData || []);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar onSettingsClick={() => setShowSettings(true)} />

      <main className="min-h-screen ml-64 px-6 pt-10 pb-16 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
        <h1 className="text-4xl font-bold mb-10 text-center tracking-tight">Your Dashboard</h1>

        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <StatBox label="Total Tasks" value={stats.totalTasks} />
              <StatBox label="Completed Tasks" value={stats.completedTasks} />
              <StatBox label="Incomplete Tasks" value={stats.incompleteTasks} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="w-full bg-[var(--color-box)] p-6 rounded-xl shadow-md border border-[var(--color-border)]">
                <h2 className="text-xl font-semibold mb-4">Priority Distribution</h2>
                <BarChart data={priorityDist} />
              </div>

              <div className="w-full bg-[var(--color-box)] p-6 rounded-xl shadow-md border border-[var(--color-border)]">
                <h2 className="text-xl font-semibold mb-4">Tasks Completed Over Time</h2>
                <LineChart data={lineData} />
              </div>

              <div className="w-full bg-[var(--color-box)] p-6 rounded-xl shadow-md border border-[var(--color-border)]">
                <h2 className="text-xl font-semibold mb-4">Task Completion Ratio</h2>
                {loading ? (
                  <Loading />
                ) : stats?.completedTasks !== undefined && stats?.incompleteTasks !== undefined ? (
                  <PieChart
                    data={[
                      { name: 'Completed', value: stats.completedTasks },
                      { name: 'Incomplete', value: stats.incompleteTasks },
                    ]}
                  />
                ) : (
                  <p className="text-center text-gray-500">No pie chart data available.</p>
                )}

              </div>
            </div>
          </>
        )}
      </main>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

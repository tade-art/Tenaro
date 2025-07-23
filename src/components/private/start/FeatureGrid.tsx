import FeatureCard from './FeatureCard';

export default function FeatureGrid() {
  return (
    <section className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
      <FeatureCard
        icon="tasks"
        title="Task Manager"
        description="Organize your work with simplicity and speed using our intuitive task interface."
        link="/tasks"
      />
      <FeatureCard
        icon="timer"
        title="Pomodoro Focus"
        description="Work in focused intervals and take strategic breaks with our built-in timer."
        link="/timer"
      />
      <FeatureCard
        icon="analytics"
        title="Progress Insights"
        description="Visualize your achievements and understand how you’re growing over time."
        link="/analytics"
      />
    </section>
  );
}

import { useState } from 'react';
import Navbar from '../../components/general/Navbar';
import Hero from '../../components/private/start/Hero';
import FeatureCard from '../../components/private/start/FeatureCard';
import SettingsModal from '../../components/private/settings/SettingsModal';

export default function StartPage() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="min-h-screen flex bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar onSettingsClick={() => setShowSettings(true)} />

        <main className="ml-64 flex-1 min-h-screen p-10 space-y-20">
          <Hero />
          
          <section className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="tasks"
              title="Smart Task Manager"
              description="Create, prioritize and complete tasks efficiently using our clean task board."
              link="/tasks"
            />
            <FeatureCard
              icon="timer"
              title="Pomodoro Timer"
              description="Focus with timed work sessions and breaks to maximize productivity."
              link="/timer"
            />
            <FeatureCard
              icon="analytics"
              title="Productivity Analytics"
              description="Track your progress and gain insight into how you spend your time."
              link="/analytics"
            />
          </section>
        </main>
      </div>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

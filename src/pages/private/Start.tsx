import { useState } from 'react';
import Navbar from '../../components/general/Navbar';
import SettingsModal from '../../components/private/settings/SettingsModal';
import FeatureGrid from '../../components/private/start/FeatureGrid';
import FeatureShowcase from '../../components/private/start/FeatureShowcase';
import Hero from '../../components/private/start/Hero';

export default function StartPage() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen flex">
        <Navbar onSettingsClick={() => setShowSettings(true)} />
        <main className="ml-64 flex-1 px-6 py-16 lg:px-24 space-y-32">
          <Hero />
          <FeatureGrid />
          <FeatureShowcase />
        </main>
      </div>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

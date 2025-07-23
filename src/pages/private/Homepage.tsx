import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SettingsModal from '../../components/private/settings/SettingsModal';
import Navbar from '../../components/private/Navbar';

export default function Homepage() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar onSettingsClick={() => setShowSettings(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

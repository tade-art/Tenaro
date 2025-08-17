import { useState } from 'react';
import Navbar from '../../components/general/Navbar';
import PomodoroTimer from '../../components/private/pomodoro/PomodoroTimer';
import SettingsModal from '../../components/private/settings/SettingsModal';

export default function PomodoroPage() {
    const [showSettings, setShowSettings] = useState(false);

    return (
    <>
        <Navbar onSettingsClick={() => setShowSettings(true)} />
        <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex items-center justify-center p-6">
        <PomodoroTimer />
        </div>
        {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  )
}

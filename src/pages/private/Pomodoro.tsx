import { useState } from 'react';
import Navbar from '../../components/general/Navbar';
import PomodoroTimer from '../../components/private/pomodoro/PomodoroTimer';
import Settings from '../../components/private/pomodoro/Settings';
import Controls from '../../components/private/pomodoro/TimerControls';
import SettingsModal from '../../components/private/settings/SettingsModal';

export default function PomodoroPage() {
    const [showSettings, setShowSettings] = useState(false);
    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState<"work" | "break">("work");
    const [key, setKey] = useState(0);

    const handleComplete = () => {
        setMode((prev) => (prev === "work" ? "break" : "work"));
        setKey((prev) => prev + 1);
    };

    const handleReset = () => {
        setIsRunning(false);
        setKey((prev) => prev + 1);
    };

    const duration = (mode === "work" ? workDuration : breakDuration) * 60;

    return (
    <>
        <Navbar onSettingsClick={() => setShowSettings(true)} />
        <div className="min-h-screen bg-background text-white flex flex-col items-center justify-center px-4">
            <h1 className="text-3xl font-semibold mb-6">{mode === "work" ? "Focus Time" : "Break Time"}</h1>
            <PomodoroTimer
                key={key}
                isRunning={isRunning}
                onComplete={handleComplete}
                duration={duration}
                mode={mode}
            />
            <Controls
                isRunning={isRunning}
                onStartPause={() => setIsRunning(!isRunning)}
                onReset={handleReset}
            />
            <Settings
                workDuration={workDuration}
                breakDuration={breakDuration}
                setWorkDuration={setWorkDuration}
                setBreakDuration={setBreakDuration}
            />
            </div>
            {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  )
}

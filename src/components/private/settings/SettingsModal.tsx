import Modal from './Modal';

export default function SettingsModal({ onClose }: { onClose: () => void }) {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  };

  return (
    <Modal title="Settings" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-text)]">Dark Mode</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-1 text-sm bg-[var(--color-accent)] text-[var(--color-text)] rounded-md hover:bg-[var(--color-accent-hover)]"
          >
            Toggle
          </button>
        </div>
      </div>
    </Modal>
  );
}

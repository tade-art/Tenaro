import Modal from './Modal';
import ThemeToggle from '../../general/ThemeToggle'

export default function SettingsModal({ onClose }: { onClose: () => void }) {

  return (
    <Modal title="Settings" onClose={onClose}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[var(--color-text)]">Dark Mode</span>
          <ThemeToggle/>
        </div>
      </div>
    </Modal>
  );
}

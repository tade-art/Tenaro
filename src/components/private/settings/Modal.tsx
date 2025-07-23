import { X } from 'lucide-react';

export default function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">{title}</h2>
          <button onClick={onClose} className="text-[var(--color-subtle-text)] hover:text-[var(--color-text)]">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

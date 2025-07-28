import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import type { Priority, Task } from '../../../util/TaskTypes';

export default function TaskModal({
  onClose,
  onSubmit,
  existingTask,
}: {
  onClose: () => void;
  onSubmit: (task: Omit<Task, 'completed'> | Task) => void;
  existingTask?: Task | null;
}) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('Medium');

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setPriority(existingTask.priority);
    }
  }, [existingTask]);

  const handleSubmit = () => {
    if (!title.trim()) return;
    const taskData = existingTask
      ? { ...existingTask, title, priority }
      : { title, priority };
    onSubmit(taskData as any);
    setTitle('');
    setPriority('Medium');
    onClose();
  };

  return (
    <Transition appear show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-[var(--color-card-bg)] p-6 text-left align-middle shadow-xl transition-all border border-[var(--color-border)]">
                <Dialog.Title as="h3" className="text-lg font-semibold text-[var(--color-text)] mb-4">
                  {existingTask ? 'Edit Task' : 'Add New Task'}
                </Dialog.Title>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--color-subtle-text)] mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="e.g. Finish CS project"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[var(--color-subtle-text)] mb-1">
                    Priority
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                    className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={onClose}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                  >
                    {existingTask ? 'Save Changes' : 'Add Task'}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

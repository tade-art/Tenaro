import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import type { FilterType, SortType } from '../../../util/TaskTypes';

interface FilterBarProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  sort: SortType;
  setSort: (sort: SortType) => void;
}

export default function FilterBar({ filter, setFilter, sort, setSort }: FilterBarProps) {
  const filters: FilterType[] = ['All', 'Completed', 'Incomplete'];
  const sorts: SortType[] = ['Title', 'Priority'];

  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded font-medium transition ${
              filter === f
                ? 'bg-orange-500 text-white'
                : 'bg-[var(--color-btn)] text-[var(--color-text)] hover:opacity-80'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <Menu as="div" className="relative text-left">
        <Menu.Button className="px-4 py-2 rounded bg-[var(--color-btn)] text-[var(--color-text)] border shadow">
          Sort by: <span className="font-semibold">{sort}</span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 rounded-md shadow-lg bg-[var(--color-card-bg)] ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {sorts.map((s) => (
                <Menu.Item key={s}>
                  {({ active }) => (
                    <button
                      onClick={() => setSort(s)}
                      className={`${
                        active ? 'bg-orange-500 text-white' : 'text-[var(--color-text)]'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {s}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

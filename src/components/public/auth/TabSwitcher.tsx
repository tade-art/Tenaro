interface Props {
  tab: 'login' | 'signup';
  setTab: (tab: 'login' | 'signup') => void;
}

export default function TabSwitcher({ tab, setTab }: Props) {
  return (
    <div className="flex justify-center mb-6 gap-2">
      <button
        onClick={() => setTab('login')}
        className={`px-4 py-2 w-1/2 rounded-md font-medium transition text-sm ${
          tab === 'login'
            ? 'bg-orange-500 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Log In
      </button>
      <button
        onClick={() => setTab('signup')}
        className={`px-4 py-2 w-1/2 rounded-md font-medium transition text-sm ${
          tab === 'signup'
            ? 'bg-orange-500 text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}

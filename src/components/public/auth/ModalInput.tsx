export default function LoginForm() {
  return (
    <>
        <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400" />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400" />
        </div>
    </>
  );
}

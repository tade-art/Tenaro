import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useState } from "react";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
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
                <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="mt-1 block w-full px-4 py-2 pr-10 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400"/>
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-orange-500"
                    aria-label="Toggle password visibility">
                    {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                    <EyeIcon className="h-5 w-5" />
                    )}
                </button>
            </div>
        </div>
        </>
    );
}

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Toast from '../../general/Toast';

interface SignupFormProps {
  setTab: (tab: 'login' | 'signup') => void;
}

export default function SignupForm({ setTab }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToast({ message: data.message || 'Signup successful', type: 'success' });
        setTimeout(() => {setToast(null); setTab('login'); }, 1000);
      } else {
        setToast({ message: data.message || 'Signup failed', type: 'error' });
      }
    } catch (err) {
      console.error(err);
      setToast({ message: 'Network Error', type: 'error' });
    }
  };

  return (
    <motion.form
      key="signup"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400"
        />
      </div>
    
      <div>
      <label className="block text-sm font-medium text-gray-700">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 pr-10 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400"/>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 text-gray-500 hover:text-orange-500"
            aria-label="Toggle password visibility">
            {showPassword ? (<EyeSlashIcon className="h-5 w-5" />) : (<EyeIcon className="h-5 w-5" />)}
            </button>
        </div>
      </div>

      <button type="submit" className="w-full btn-primary">Sign Up</button>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </motion.form>
  );
}

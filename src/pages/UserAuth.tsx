import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import NavFooter from '../components/layouts/NavAndFooter';
import LoginForm from '../components/public/auth/LoginForm';
import SignupForm from '../components/public/auth/SignupForm';
import AuthTabSwitcher from '../components/public/auth/TabSwitcher';

export default function AuthTabs() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  return (
    <NavFooter>
    <section className="min-h-[100vh] flex items-center justify-center bg-[var(--color-accent-bg)] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Welcome to Tenaro</h2>
        <AuthTabSwitcher tab={tab} setTab={setTab} />
        <AnimatePresence mode="wait">
          {tab === 'login' ? <LoginForm key="login" /> : <SignupForm key="signup" />}
        </AnimatePresence>
      </div>
    </section>
    </NavFooter>
  );
}
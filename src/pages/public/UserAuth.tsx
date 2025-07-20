import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavFooter from '../../components/layouts/NavAndFooter';
import LoginForm from '../../components/public/auth/LoginForm';
import SignupForm from '../../components/public/auth/SignupForm';
import AuthTabSwitcher from '../../components/public/auth/TabSwitcher';

export default function AuthTabs() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  return (
    <NavFooter>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <Link to="/" className="group text-center text-2xl font-bold text-gray-800 mb-6 block">
          Welcome to {' '}
          <span className="inline-block relative text-orange-500">
            Tenaro
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <AuthTabSwitcher tab={tab} setTab={setTab} />
        <AnimatePresence mode="wait">
          {tab === 'login' ? <LoginForm key="login" /> : <SignupForm key="signup" />}
        </AnimatePresence>
      </div>
    </NavFooter>
  );
}


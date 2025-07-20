import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`
            fixed bottom-8 transform -translate-x-1/2 
            w-[90%] max-w-md 
            px-6 py-4 
            rounded-xl shadow-lg 
            text-white text-lg font-semibold 
            text-center
            ${bgColor}
          `}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

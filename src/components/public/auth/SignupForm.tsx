import { motion } from 'framer-motion';
import ModalContent from './ModalContent';

export default function SignupForm() {
  return (
    <motion.form
      key="signup"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-orange-400 focus:border-orange-400"/>
      </div>
    
    <ModalContent />
    <button type="submit" className="w-full btn-primary">Sign Up</button>
    
    </motion.form>
  );
}

import { motion } from 'framer-motion';
import ModalContent from './ModalContent';

export default function LoginForm() {
  return (
    <motion.form
      key="login"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.25 }}
      className="space-y-4"
    >
    <ModalContent />
    <button type="submit"className="w-full btn-primary"> Log In</button>
    
    </motion.form>
  );
}

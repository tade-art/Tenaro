import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../../../images/note.svg';

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <motion.div
        className="blur-circle-left"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="blur-circle-right"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.8 }}
      />

      <div className="flex items-center justify-between w-full max-w-7xl">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="hero-subheading">Your new productivity sidekick</p>
          <h1 className="hero-heading">Tenaro</h1>
          <p className="hero-description">
            Focus deeply. Track your time. Master your tasks.
          </p>
          <Link to="/auth" className="btn-primary">
            Get Started
          </Link>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <img src={img} className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}

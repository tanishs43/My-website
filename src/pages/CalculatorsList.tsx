import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CALCULATORS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

export default function CalculatorsList() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-luxury mb-4">Precision Suite</div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tighter uppercase">
              Health <span className="text-white/20">Calculators.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl border-l border-neon/30 pl-6 leading-relaxed">
              Professional-grade computational tools for comprehensive biometric assessment and fitness tracking.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CALCULATORS.map((calc, index) => (
            <div key={calc.id}>
              <CalculatorCard item={calc} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TOOLS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

export default function ToolsList() {
  return (
    <div className="pt-32 pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-luxury mb-4">Advanced Analysis</div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tighter uppercase">
              Health <span className="text-white/20">Tools.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl border-l border-neon/30 pl-6 leading-relaxed">
              Sophisticated diagnostic interfaces for deep health insights and body composition analysis.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOOLS.map((tool, index) => (
            <div key={tool.id}>
              <CalculatorCard item={tool} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

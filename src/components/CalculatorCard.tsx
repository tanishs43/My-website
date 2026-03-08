import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CalculatorInfo } from '../types';

interface Props {
  item: CalculatorInfo;
  index: number;
}

export default function CalculatorCard({ item, index }: Props) {
  const Icon = (Icons as any)[item.icon] || Icons.Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        to={item.path}
        className="group block p-8 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-3xl hover:bg-white/[0.08] hover:border-neon/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Icon className="w-24 h-24 text-white" />
        </div>
        
        <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:border-neon/50 group-hover:bg-neon/10 transition-all duration-500">
          <Icon className="text-white group-hover:text-neon w-4 h-4 transition-colors" />
        </div>
        
        <div className="flex-grow">
          <div className="text-luxury mb-2">{item.category}</div>
          <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tighter uppercase group-hover:text-neon transition-colors">
            {item.title}
          </h3>
          
          <p className="text-slate-500 text-xs leading-relaxed mb-8 uppercase tracking-wider">
            {item.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/[0.05]">
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold group-hover:text-white transition-colors">Initialize</span>
          <Icons.ArrowRight className="w-4 h-4 text-white/20 group-hover:text-neon group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}

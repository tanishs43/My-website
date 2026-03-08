import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, HelpCircle, AlertTriangle, Calculator as CalcIcon, ChevronRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CalculatorResult } from '../types';
import { CALCULATORS, CHARTS } from '../constants';
import CalculatorCard from './CalculatorCard';

interface Props {
  title: string;
  description: string;
  inputs: React.ReactNode;
  onCalculate: () => void;
  result: CalculatorResult | null;
  visualScale?: React.ReactNode;
  explanation: React.ReactNode;
  referenceChart?: React.ReactNode;
  tips: string[];
  faq: { q: string; a: string }[];
  formula: string;
  relatedCalculators?: string[]; // IDs of related calculators
  relatedCharts?: string[]; // IDs of related charts
}

export default function CalculatorTemplate({
  title,
  description,
  inputs,
  onCalculate,
  result,
  visualScale,
  explanation,
  referenceChart,
  tips,
  faq,
  formula,
  relatedCalculators = [],
  relatedCharts = []
}: Props) {
  const relatedCalcs = CALCULATORS.filter(c => relatedCalculators.includes(c.id));
  const relatedChs = CHARTS.filter(c => relatedCharts.includes(c.id));

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-luxury mb-4">Health Metrics / {title}</div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 tracking-tighter uppercase">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? 'text-white' : 'text-white/20'}>{word} </span>
              ))}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl border-l border-neon/30 pl-6">
              {description}
            </p>
          </motion.div>
        </div>

        {/* 2. Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[0.05] border border-white/[0.05] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-black/50">
          {/* Left: Inputs */}
          <div className="lg:col-span-5 p-6 lg:p-10 bg-white/[0.02] backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-neon/10 rounded flex items-center justify-center">
                <CalcIcon className="text-neon w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-white/60 tracking-widest uppercase">Configuration</h2>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-5">
                {inputs}
              </div>
              <button
                onClick={onCalculate}
                className="group relative w-full py-4 bg-neon hover:bg-white text-black rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Calculate Metrics</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* Right: Results / Real-time feedback */}
          <div className="lg:col-span-7 p-6 lg:p-10 bg-white/[0.01] backdrop-blur-sm flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
                    <div className="text-luxury mb-4">Analysis Result</div>
                    <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
                      <div className="text-6xl lg:text-8xl font-display font-bold text-neon tracking-tighter leading-none">
                        {result.value}
                      </div>
                      <div className="text-2xl font-display font-bold text-white uppercase tracking-tighter pb-1">
                        {result.category}
                      </div>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6" />
                    
                    <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-8">
                      {result.message}
                    </p>
                    
                    {visualScale && (
                      <div className="relative">
                        <div className="text-[10px] uppercase tracking-widest text-white/20 mb-3 font-bold">Distribution Scale</div>
                        {visualScale}
                      </div>
                    )}
                    
                    {/* Decorative background glow for result */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon/10 rounded-full blur-[60px] pointer-events-none" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Activity className="text-white/20 w-6 h-6" />
                  </div>
                  <div className="text-luxury">Awaiting Data Input</div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-2">Fill in the metrics on the left to begin</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 3. Integrated Content Sections */}
        <div className="space-y-px bg-white/[0.05] border border-white/[0.05] rounded-3xl overflow-hidden">
          {/* Result Explanation - Only shown after calculation */}
          {result && (
            <section className="p-8 lg:p-12 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <Info className="text-neon w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Understanding the Results</h2>
              </div>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-sm columns-1 md:columns-2 gap-12">
                {explanation}
              </div>
            </section>
          )}

          {/* Reference Chart Section */}
          {referenceChart && (
            <section className="p-8 lg:p-12 bg-white/[0.01]">
              <div className="text-luxury mb-8">Data Reference</div>
              <h2 className="text-2xl font-bold text-white mb-10">Standard Metrics Chart</h2>
              <div className="max-w-3xl mx-auto">
                {referenceChart}
              </div>
            </section>
          )}

          {/* Health Tips Section */}
          <section className="p-8 lg:p-12 bg-white/[0.02]">
            <div className="text-luxury mb-8">Recommendations</div>
            <h2 className="text-2xl font-bold text-white mb-10">Actionable Health Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] border border-white/[0.05]">
              {tips.map((tip, i) => (
                <div key={i} className="p-8 bg-white/[0.01] group hover:bg-white/[0.02] transition-colors">
                  <div className="text-neon font-display font-bold text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-wider">{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="p-8 lg:p-12 bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle className="text-neon w-5 h-5" />
              <h2 className="text-xl font-bold text-white">Common Inquiries</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {faq.map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest group-hover:text-neon transition-colors">{item.q}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How This Calculator Works */}
          <section className="p-8 lg:p-12 bg-white/[0.02]">
            <div className="text-luxury mb-8">Methodology</div>
            <h2 className="text-2xl font-bold text-white mb-10">Scientific Formula</h2>
            <div className="bg-black rounded-2xl p-8 border border-white/[0.05] mb-8 relative overflow-hidden group">
              <code className="text-neon font-mono text-2xl whitespace-nowrap relative z-10">{formula}</code>
              <div className="absolute inset-0 bg-neon/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
              Our algorithms are derived from peer-reviewed clinical studies. While these estimates are statistically significant for the general population, individual biological variance may apply.
            </p>
          </section>
        </div>

        {/* Medical Disclaimer */}
        <section className="mt-16 p-8 border border-white/[0.05] rounded-3xl bg-white/[0.01]">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-amber-500 w-5 h-5" />
            <h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em]">Medical Disclaimer</h2>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider">
            VitalMetrics provides computational estimates for informational purposes only. This is not a diagnostic tool. Consult with a licensed medical professional before initiating any clinical or dietary interventions.
          </p>
        </section>

        {/* Related Content */}
        <div className="mt-24 space-y-16">
          {relatedCalcs.length > 0 && (
            <section>
              <div className="text-luxury mb-8">Next Steps</div>
              <h2 className="text-3xl font-bold text-white mb-12">Complementary Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCalcs.map((calc, index) => (
                  <div key={calc.id}>
                    <CalculatorCard item={calc} index={index} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {relatedChs.length > 0 && (
            <section>
              <div className="text-luxury mb-8">Reference</div>
              <h2 className="text-3xl font-bold text-white mb-12">Data Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedChs.map((chart, index) => (
                  <div key={chart.id}>
                    <CalculatorCard item={chart} index={index} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

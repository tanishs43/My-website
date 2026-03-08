import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, HelpCircle, Info, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CALCULATORS, CHARTS, TOOLS } from '../constants';
import CalculatorCard from './CalculatorCard';

interface ToolTemplateProps {
  title: string;
  description: string;
  inputs: React.ReactNode;
  onCalculate: () => void;
  result: any;
  explanation?: React.ReactNode;
  howToUse?: string[];
  measurementGuide?: React.ReactNode;
  whyUseful?: string[];
  relatedTools?: string[];
  relatedCharts?: string[];
  faq?: { q: string; a: string }[];
  howItWorks?: React.ReactNode;
}

export default function ToolTemplate({
  title,
  description,
  inputs,
  onCalculate,
  result,
  explanation,
  howToUse,
  measurementGuide,
  whyUseful,
  relatedTools = [],
  relatedCharts = [],
  faq,
  howItWorks
}: ToolTemplateProps) {
  const relatedToolsData = TOOLS.filter(t => relatedTools.includes(t.id));
  const relatedChartsData = CHARTS.filter(c => relatedCharts.includes(c.id));

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
            <div className="text-luxury mb-4">Advanced Analysis / {title}</div>
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

        {/* 2. Main Tool Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[0.05] border border-white/[0.05] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-black/50">
          {/* Left: Inputs */}
          <div className="lg:col-span-5 p-6 lg:p-10 bg-white/[0.02] backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-neon/10 rounded flex items-center justify-center">
                <ChevronRight className="text-neon w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-white/60 tracking-widest uppercase">Parameters</h2>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-5">
                {inputs}
              </div>
              <button
                onClick={onCalculate}
                className="group relative w-full py-4 bg-neon hover:bg-white text-black rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">Initialize Analysis</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>

          {/* Right: Results */}
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
                    
                    {result.details && (
                      <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl text-xs text-slate-500 italic">
                        {result.details}
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
                  <div className="text-luxury">Ready for Processing</div>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-2">Configure parameters on the left to begin</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </div>

        {/* 3. Integrated Content Sections */}
        <div className="space-y-px bg-white/[0.05] border border-white/[0.05] rounded-3xl overflow-hidden">
          {/* Result Explanation */}
          {result && explanation && (
            <section className="p-8 lg:p-12 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-8">
                <Info className="text-neon w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Understanding Your Result</h2>
              </div>
              <div className="prose prose-invert max-w-none text-slate-400 text-sm columns-1 md:columns-2 gap-12">
                {explanation}
              </div>
            </section>
          )}

          {/* How to Use This Tool */}
          {howToUse && (
            <section className="p-8 lg:p-12 bg-white/[0.01]">
              <div className="text-luxury mb-8">Instructions</div>
              <h2 className="text-2xl font-bold text-white mb-10">Usage Protocol</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05]">
                {howToUse.map((step, i) => (
                  <div key={i} className="p-8 bg-white/[0.01] group hover:bg-white/[0.02] transition-colors">
                    <div className="w-10 h-10 border border-neon/30 rounded-full flex items-center justify-center text-neon font-bold mb-6 group-hover:bg-neon group-hover:text-black transition-all">
                      {i + 1}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Measurement Guide */}
          {measurementGuide && (
            <section className="p-8 lg:p-12 bg-white/[0.02]">
              <div className="text-luxury mb-8">Technical Guide</div>
              <h2 className="text-2xl font-bold text-white mb-10">Measurement Standards</h2>
              <div className="max-w-3xl mx-auto">
                {measurementGuide}
              </div>
            </section>
          )}

          {/* Why This Tool Is Useful */}
          {whyUseful && (
            <section className="p-8 lg:p-12 bg-white/[0.01]">
              <div className="text-luxury mb-8">Benefits</div>
              <h2 className="text-2xl font-bold text-white mb-10">Clinical Utility</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyUseful.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-400 group">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQ Section */}
          <section className="p-8 lg:p-12 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle className="text-neon w-5 h-5" />
              <h2 className="text-xl font-bold text-white">Common Inquiries</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {faq?.map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest group-hover:text-neon transition-colors">{item.q}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How This Tool Works */}
          {howItWorks && (
            <section className="p-8 lg:p-12 bg-white/[0.01]">
              <div className="text-luxury mb-8">Methodology</div>
              <h2 className="text-2xl font-bold text-white mb-10">Algorithmic Foundation</h2>
              <div className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                {howItWorks}
              </div>
            </section>
          )}
        </div>

        {/* Disclaimer */}
        <section className="mt-16 p-8 border border-white/[0.05] rounded-3xl bg-white/[0.01]">
          <div className="flex items-center gap-3 mb-4">
            <Info className="text-slate-500 w-5 h-5" />
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Medical Disclaimer</h2>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-wider">
            This tool provides computational estimates for informational purposes only. This is not a diagnostic tool. Consult with a licensed medical professional before initiating any clinical or dietary interventions.
          </p>
        </section>

        {/* Related Content */}
        <div className="mt-24 space-y-16">
          {relatedToolsData.length > 0 && (
            <section>
              <div className="text-luxury mb-8">Next Steps</div>
              <h2 className="text-3xl font-bold text-white mb-12">Complementary Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedToolsData.map((tool, i) => (
                  <div key={tool.id}>
                    <CalculatorCard item={tool} index={i} />
                  </div>
                ))}
              </div>
            </section>
          )}

          {relatedChartsData.length > 0 && (
            <section>
              <div className="text-luxury mb-8">Reference</div>
              <h2 className="text-3xl font-bold text-white mb-12">Data Visualizations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedChartsData.map((chart, i) => (
                  <div key={chart.id}>
                    <CalculatorCard item={chart} index={i} />
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

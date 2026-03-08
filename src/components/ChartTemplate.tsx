import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Info, Table } from 'lucide-react';
import { CHARTS, CALCULATORS } from '../constants';
import CalculatorCard from './CalculatorCard';

interface ChartTemplateProps {
  title: string;
  description: string;
  mainContent: React.ReactNode;
  visualChart?: React.ReactNode;
  explanation?: React.ReactNode;
  categoryExplanation?: { category: string; description: string }[];
  howToUse?: string[];
  relatedCalculators?: string[];
  relatedCharts?: string[];
  faq?: { q: string; a: string }[];
}

export default function ChartTemplate({
  title,
  description,
  mainContent,
  visualChart,
  explanation,
  categoryExplanation,
  howToUse,
  relatedCalculators = [],
  relatedCharts = [],
  faq
}: ChartTemplateProps) {
  const relatedCalculatorsData = CALCULATORS.filter(c => relatedCalculators.includes(c.id));
  const relatedChartsData = CHARTS.filter(c => relatedCharts.includes(c.id));

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Page Title & Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        {/* 2. Chart / Table Section (Main Content) */}
        <div className="glass rounded-3xl p-8 mb-12 border-white/5">
          <div className="flex items-center gap-2 mb-6">
            <Table className="text-emerald-400 w-5 h-5" />
            <h2 className="text-xl font-bold text-white">Reference Table</h2>
          </div>
          {mainContent}
        </div>

        {/* 3. Visual Chart / Infographic */}
        {visualChart && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Visual Guide</h2>
            <div className="glass p-8 rounded-3xl border-white/5">
              {visualChart}
            </div>
          </section>
        )}

        {/* 4. Chart Explanation Section */}
        {explanation && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">What This Chart Means</h2>
            <div className="prose prose-invert max-w-none text-slate-400">
              {explanation}
            </div>
          </section>
        )}

        {/* 5. Category Explanation */}
        {categoryExplanation && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Category Breakdown</h2>
            <div className="space-y-4">
              {categoryExplanation.map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5">
                  <h3 className="text-emerald-400 font-bold mb-2">{item.category}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. How to Use This Chart */}
        {howToUse && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">How to Use This Chart</h2>
            <div className="space-y-4">
              {howToUse.map((step, i) => (
                <div key={i} className="flex items-start gap-4 text-slate-400">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="pt-1">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Related Calculators */}
        {relatedCalculatorsData.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCalculatorsData.map((calc, i) => (
                <div key={calc.id}>
                  <CalculatorCard item={calc} index={i} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Related Charts */}
        {relatedChartsData.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">More Reference Charts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedChartsData.map((chart, i) => (
                <div key={chart.id}>
                  <CalculatorCard item={chart} index={i} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. FAQ Section */}
        {faq && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <HelpCircle className="text-emerald-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5">
                  <h3 className="text-white font-bold mb-2">{item.q}</h3>
                  <p className="text-slate-400">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. Medical Disclaimer */}
        <section className="pt-12 border-t border-white/10">
          <div className="flex items-start gap-4 p-6 bg-slate-900/50 rounded-2xl border border-white/5">
            <Info className="w-6 h-6 text-slate-500 shrink-0 mt-1" />
            <p className="text-sm text-slate-500 leading-relaxed">
              <span className="font-bold text-slate-400 uppercase text-xs block mb-1">Medical Disclaimer</span>
              This chart provides general health guidance and should not replace professional medical advice. Individual health needs vary, and these ranges are general estimates.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

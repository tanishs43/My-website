import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateBodyShape } from '../../utils/formulas';

export default function BodyShapeAnalyzer() {
  const [bust, setBust] = React.useState(90);
  const [waist, setWaist] = React.useState(70);
  const [hip, setHip] = React.useState(95);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateBodyShape(bust, waist, hip);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Body Shape Analyzer – Find Your Body Type"
      description="Use this body shape analyzer to determine your body type based on measurements such as bust, waist, and hips."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Bust (cm)</label>
            <input
              type="number"
              value={bust}
              onChange={(e) => setBust(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Waist (cm)</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Hip (cm)</label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Understanding your body shape can help guide fitness goals, clothing choices, and body composition awareness. 
          Common body shape categories include Hourglass, Pear, Apple, Rectangle, and Inverted Triangle.
        </p>
      }
      howToUse={[
        'Enter your bust measurement at the fullest part.',
        'Enter your waist measurement at the narrowest part.',
        'Enter your hip measurement at the widest part.',
        'Click analyze to see your body shape result.'
      ]}
      measurementGuide={
        <div className="space-y-4 text-slate-400">
          <p><strong>Bust:</strong> Measure around the fullest part of the chest.</p>
          <p><strong>Waist:</strong> Measure around the narrowest part of the waist.</p>
          <p><strong>Hips:</strong> Measure around the widest part of the hips.</p>
        </div>
      }
      whyUseful={[
        'Understand body proportions',
        'Improve fitness planning',
        'Track body composition changes',
        'Choose suitable workout plans'
      ]}
      relatedTools={['bmi', 'body-fat', 'ideal-weight']}
      relatedCharts={['bmi-chart', 'body-fat-chart']}
      faq={[
        { q: 'What is a body shape analyzer?', a: 'It is a tool that uses your body measurements to classify your physical proportions into common categories.' },
        { q: 'How accurate is this tool?', a: 'It is a general guide based on common ratios used in the fashion and fitness industries.' },
        { q: 'Can body shape change over time?', a: 'Yes, through targeted exercise and nutrition, you can modify your body composition and proportions.' }
      ]}
      howItWorks={
        <p>
          The body shape analyzer compares ratios between bust, waist, and hip measurements to classify body types. 
          For example, an hourglass shape is defined by similar bust and hip measurements with a significantly smaller waist.
        </p>
      }
    />
  );
}

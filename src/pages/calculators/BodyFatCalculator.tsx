import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateBodyFat } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function BodyFatCalculator() {
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [height, setHeight] = React.useState<string>('');
  const [neck, setNeck] = React.useState<string>('');
  const [waist, setWaist] = React.useState<string>('');
  const [hip, setHip] = React.useState<string>('');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (height && neck && waist) {
      const res = calculateBodyFat(
        gender,
        parseFloat(height),
        parseFloat(neck),
        parseFloat(waist),
        gender === 'female' ? parseFloat(hip) : undefined
      );
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="Body Fat Percentage Calculator"
      description="Estimate your body fat percentage using the U.S. Navy Method based on body measurements."
      inputs={
        <div className="space-y-4">
          <div>
            <label>Gender</label>
            <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl">
              <button onClick={() => setGender('male')} className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${gender === 'male' ? 'bg-neon text-black shadow-lg shadow-neon/20' : 'text-white/40 hover:text-white'}`}>Male</button>
              <button onClick={() => setGender('female')} className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${gender === 'female' ? 'bg-neon text-black shadow-lg shadow-neon/20' : 'text-white/40 hover:text-white'}`}>Female</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" />
            </div>
            <div>
              <label>Neck (cm)</label>
              <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} placeholder="38" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Waist (cm)</label>
              <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="85" />
            </div>
            {gender === 'female' && (
              <div>
                <label>Hip (cm)</label>
                <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="95" />
              </div>
            )}
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>Body fat percentage is a measure of fitness level, as it is the only body measurement which directly calculates a person's relative body composition without regard to height or weight.</p>
          <p>The U.S. Navy Method uses circumferences of the neck, waist, and hips (for women) to estimate body fat.</p>
        </div>
      }
      tips={[
        "Measure at the same time of day.",
        "Keep the tape measure level.",
        "Don't pull the tape too tight.",
        "Consistency is key for tracking changes."
      ]}
      relatedCalculators={['bmi', 'lean-body-mass', 'ideal-weight']}
      relatedCharts={['body-fat-chart']}
      faq={[
        { q: "What is a healthy body fat percentage?", a: "For men, 14-24% is average; for women, 21-31% is average." },
        { q: "How accurate is the Navy method?", a: "It's a good estimate but can have a 3-4% margin of error compared to DEXA scans." }
      ]}
      formula="Uses Logarithmic formulas based on circumferences"
    />
  );
}

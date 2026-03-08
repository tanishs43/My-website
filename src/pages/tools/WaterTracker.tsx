import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateWaterIntake, calculateHabitSuccess } from '../../utils/formulas';

export default function WaterTracker() {
  const [weight, setWeight] = React.useState(70);
  const [consumed, setConsumed] = React.useState(0);
  const [result, setResult] = React.useState<any>(null);

  const goal = parseFloat((weight * 0.033).toFixed(1));

  const handleCalculate = () => {
    const res = calculateHabitSuccess(consumed, goal);
    setResult({
      ...res,
      category: 'Hydration Progress',
      message: `You have consumed ${consumed}L out of your ${goal}L daily goal.`
    });
  };

  return (
    <ToolTemplate
      title="Water Tracker – Stay Hydrated"
      description="Track your daily water intake and see how close you are to your recommended hydration goal."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Water Consumed (Liters)</label>
            <div className="flex gap-2">
              <input
                type="number"
                step="0.1"
                value={consumed}
                onChange={(e) => setConsumed(Number(e.target.value))}
                className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button 
                onClick={() => setConsumed(prev => parseFloat((prev + 0.25).toFixed(2)))}
                className="px-4 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
              >
                +250ml
              </button>
            </div>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Proper hydration is essential for every bodily function, including temperature regulation, joint lubrication, and nutrient transport. 
          A general rule is to drink about 33ml of water per kilogram of body weight.
        </p>
      }
      howToUse={[
        'Enter your current weight to calculate your daily goal.',
        'Log your water intake throughout the day.',
        'Use the +250ml button for quick logging of a standard glass.',
        'Click analyze to see your progress percentage.'
      ]}
      whyUseful={[
        'Prevent dehydration',
        'Improve energy and focus',
        'Support healthy skin',
        'Aid digestion and weight management'
      ]}
      relatedTools={['water-intake', 'health-risk', 'diet-planner']}
      faq={[
        { q: 'How much water do I really need?', a: 'While 2-3 liters is common, your specific needs depend on your weight, activity level, and climate.' },
        { q: 'Can I drink too much water?', a: 'Yes, excessive water intake can lead to hyponatremia, but this is rare for most healthy adults.' },
        { q: 'Do other drinks count?', a: 'Yes, but pure water is the best source of hydration. Coffee and tea also contribute, though they have mild diuretic effects.' }
      ]}
      howItWorks={
        <p>
          The tracker calculates your goal based on the formula: weight (kg) × 0.033. 
          Your progress is then shown as a percentage of this calculated goal.
        </p>
      }
    />
  );
}

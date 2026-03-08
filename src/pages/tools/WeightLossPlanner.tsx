import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateWeightLossPlanner } from '../../utils/formulas';

export default function WeightLossPlanner() {
  const [weight, setWeight] = React.useState(80);
  const [goalWeight, setGoalWeight] = React.useState(70);
  const [deficit, setDeficit] = React.useState(500);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateWeightLossPlanner(weight, goalWeight, deficit);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Weight Loss Planner – Plan Your Journey"
      description="Estimate how long it will take to reach your goal weight based on your daily calorie deficit."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Current Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Goal Weight (kg)</label>
            <input
              type="number"
              value={goalWeight}
              onChange={(e) => setGoalWeight(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Daily Calorie Deficit</label>
            <select
              value={deficit}
              onChange={(e) => setDeficit(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value={250}>250 kcal (Slow & Steady)</option>
              <option value={500}>500 kcal (Recommended)</option>
              <option value={750}>750 kcal (Aggressive)</option>
              <option value={1000}>1000 kcal (Very Aggressive)</option>
            </select>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Weight loss is primarily driven by a calorie deficit. One kilogram of body fat is approximately equal to 7,700 calories. 
          By maintaining a consistent daily deficit, you can estimate the time required to reach your target weight.
        </p>
      }
      howToUse={[
        'Enter your current weight and your target goal weight.',
        'Choose a daily calorie deficit that feels sustainable for you.',
        'Click analyze to see the estimated number of days to reach your goal.',
        'Use this timeline to set realistic milestones.'
      ]}
      whyUseful={[
        'Set realistic expectations',
        'Plan long-term health goals',
        'Understand the impact of calorie deficits',
        'Stay committed with a clear timeline'
      ]}
      relatedTools={['calorie-intake', 'tdee', 'diet-planner']}
      faq={[
        { q: 'Is a 1000 calorie deficit safe?', a: 'For most people, a 500-calorie deficit is recommended. A 1000-calorie deficit is very aggressive and should be discussed with a doctor.' },
        { q: 'Will I lose exactly this much weight?', a: 'Weight loss is rarely linear. Factors like water retention, muscle gain, and metabolic adaptation can affect the actual timeline.' },
        { q: 'What is the best deficit for me?', a: 'The best deficit is the one you can stick to consistently. Most experts recommend losing 0.5 to 1 kg per week.' }
      ]}
      howItWorks={
        <p>
          The tool calculates the total calories needed to be burned (weight to lose × 7,700) and divides it by your daily deficit 
          to find the total number of days.
        </p>
      }
    />
  );
}

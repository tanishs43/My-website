import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateDietPlan } from '../../utils/formulas';

export default function DailyDietPlanner() {
  const [tdee, setTdee] = React.useState(2000);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateDietPlan(tdee);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Daily Diet Planner – Plan Your Nutrition"
      description="Plan your daily meals and macronutrient intake based on your total daily energy expenditure (TDEE)."
      inputs={
        <div className="max-w-xs mx-auto">
          <label className="block text-sm font-medium text-slate-400 mb-2">Your TDEE (Calories/Day)</label>
          <input
            type="number"
            value={tdee}
            onChange={(e) => setTdee(Number(e.target.value))}
            className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
          <p className="mt-2 text-xs text-slate-500">Calculate your TDEE first if you don't know it.</p>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          A balanced diet typically follows a macronutrient split that provides enough protein for muscle maintenance, 
          carbohydrates for energy, and healthy fats for hormonal health. 
          This planner uses a 30% Protein, 40% Carbs, and 30% Fat split.
        </p>
      }
      howToUse={[
        'Calculate your TDEE using our TDEE calculator.',
        'Enter your TDEE calories into the planner.',
        'Click analyze to see your daily macronutrient targets in grams.',
        'Distribute these targets across your daily meals.'
      ]}
      whyUseful={[
        'Optimize nutrition for your goals',
        'Ensure adequate protein intake',
        'Balance energy levels throughout the day',
        'Simplify meal planning'
      ]}
      relatedTools={['tdee', 'macro', 'protein-intake']}
      faq={[
        { q: 'What is a macro split?', a: 'It is the ratio of calories coming from protein, carbohydrates, and fats in your diet.' },
        { q: 'Is 30/40/30 the best split?', a: 'It is a very common and effective "balanced" split. However, athletes or those with specific goals might prefer different ratios.' },
        { q: 'How do I convert calories to grams?', a: 'Protein and carbs have 4 calories per gram. Fat has 9 calories per gram.' }
      ]}
      howItWorks={
        <p>
          The planner calculates the calories for each macronutrient based on the 30/40/30 split and then divides 
          by the respective calorie density (4 for protein/carbs, 9 for fat) to get the target grams.
        </p>
      }
    />
  );
}

import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateHabitSuccess } from '../../utils/formulas';

export default function HabitTracker() {
  const [completed, setCompleted] = React.useState(20);
  const [total, setTotal] = React.useState(30);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateHabitSuccess(completed, total);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Habit Tracker – Stay Consistent"
      description="Track your consistency with healthy habits and see your success rate over time."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Days Completed</label>
            <input
              type="number"
              value={completed}
              onChange={(e) => setCompleted(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Total Days in Period</label>
            <input
              type="number"
              value={total}
              onChange={(e) => setTotal(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Consistency is the most important factor in long-term health success. 
          Tracking your habits helps you stay accountable and visualize your progress, which increases the likelihood of long-term behavior change.
        </p>
      }
      howToUse={[
        'Choose a specific habit you want to track (e.g., daily exercise).',
        'Decide on a time period (e.g., 30 days).',
        'Count how many days you successfully completed the habit.',
        'Enter the numbers and click analyze to see your consistency score.'
      ]}
      whyUseful={[
        'Build long-term discipline',
        'Visualize progress and success',
        'Identify patterns in behavior',
        'Stay motivated during difficult periods'
      ]}
      relatedTools={['water-tracker', 'fitness-estimator', 'health-risk']}
      faq={[
        { q: 'What is a good success rate?', a: 'Aim for 80% or higher. Perfection is not necessary for progress, but consistency is key.' },
        { q: 'What if I miss a day?', a: 'Don\'t let one missed day turn into two. Focus on getting back on track immediately.' },
        { q: 'How many habits should I track?', a: 'Start with 1-3 habits. Tracking too many at once can be overwhelming and lead to burnout.' }
      ]}
      howItWorks={
        <p>
          The tool calculates your success rate as a percentage of completed days over the total days in the tracking period.
        </p>
      }
    />
  );
}

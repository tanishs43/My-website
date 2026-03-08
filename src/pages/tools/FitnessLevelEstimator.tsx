import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';

export default function FitnessLevelEstimator() {
  const [steps, setSteps] = React.useState(5000);
  const [activeMinutes, setActiveMinutes] = React.useState(30);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    let category = 'Sedentary';
    let score = (steps / 100) + (activeMinutes * 2);
    
    if (steps >= 10000 || score > 150) category = 'Highly Active';
    else if (steps >= 7500 || score > 100) category = 'Active';
    else if (steps >= 5000 || score > 50) category = 'Lightly Active';

    setResult({
      value: Math.round(score),
      category: category,
      message: `Your estimated activity level is ${category}.`
    });
  };

  return (
    <ToolTemplate
      title="Fitness Level Estimator – Track Your Daily Activity"
      description="Estimate your overall fitness and activity level based on your daily steps and active minutes."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Average Daily Steps</label>
            <input
              type="number"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Daily Active Minutes</label>
            <input
              type="number"
              value={activeMinutes}
              onChange={(e) => setActiveMinutes(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Daily movement is a key indicator of overall health. Walking 10,000 steps a day is a common goal, 
          but even smaller increases in activity can have significant health benefits.
        </p>
      }
      howToUse={[
        'Check your phone or fitness tracker for your average daily steps.',
        'Estimate how many minutes you spend in moderate to vigorous activity.',
        'Enter these numbers into the calculator.',
        'Click analyze to see your estimated activity category.'
      ]}
      whyUseful={[
        'Monitor daily movement habits',
        'Set incremental activity goals',
        'Understand your lifestyle category',
        'Stay motivated to move more'
      ]}
      relatedTools={['fitness-test', 'calorie-burn', 'tdee']}
      faq={[
        { q: 'Is 10,000 steps really necessary?', a: 'While 10,000 is a great goal, research shows that health benefits start to increase significantly even at 7,000-8,000 steps.' },
        { q: 'What counts as active minutes?', a: 'Any activity that raises your heart rate, such as brisk walking, cycling, or swimming.' },
        { q: 'How can I increase my steps?', a: 'Try taking the stairs, parking further away, or going for a short walk during your lunch break.' }
      ]}
      howItWorks={
        <p>
          The estimator uses a combination of step count and active minutes to assign an activity category, 
          weighting intentional exercise (active minutes) alongside general movement (steps).
        </p>
      }
    />
  );
}

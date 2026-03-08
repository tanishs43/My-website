import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateHealthRisk } from '../../utils/formulas';

export default function HealthRiskAnalyzer() {
  const [bmi, setBmi] = React.useState(24);
  const [waist, setWaist] = React.useState(85);
  const [age, setAge] = React.useState(35);
  const [activity, setActivity] = React.useState(1.3);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateHealthRisk(bmi, waist, age, activity);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Health Risk Analyzer – Assess Your Risks"
      description="Analyze potential health risks based on your BMI, waist circumference, age, and activity level."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">BMI (from BMI Calculator)</label>
            <input
              type="number"
              value={bmi}
              onChange={(e) => setBmi(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Waist Circumference (cm)</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value={1.2}>Sedentary</option>
              <option value={1.375}>Lightly Active</option>
              <option value={1.55}>Moderately Active</option>
              <option value={1.725}>Very Active</option>
            </select>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Health risk analysis considers multiple factors that contribute to chronic disease risk. 
          While no single metric is definitive, combining BMI, waist circumference, age, and activity level provides a more comprehensive view of your health profile.
        </p>
      }
      howToUse={[
        'Calculate your BMI using our BMI calculator first.',
        'Measure your waist circumference at the level of your navel.',
        'Enter your age and current activity level.',
        'Click analyze to see your estimated risk profile.'
      ]}
      whyUseful={[
        'Identify potential health concerns early',
        'Understand the impact of lifestyle choices',
        'Monitor changes in risk factors over time',
        'Prepare for discussions with your doctor'
      ]}
      relatedTools={['bmi', 'body-fat', 'fitness-test']}
      faq={[
        { q: 'What is a high-risk waist circumference?', a: 'For men, a waist over 102cm (40 inches) is considered high risk. For women, it is over 88cm (35 inches).' },
        { q: 'How does age affect health risk?', a: 'As we age, the risk of chronic conditions like heart disease and diabetes naturally increases, making lifestyle factors even more important.' },
        { q: 'Can I lower my risk score?', a: 'Yes! Improving your diet, increasing physical activity, and maintaining a healthy weight can significantly lower your risk profile.' }
      ]}
      howItWorks={
        <p>
          The analyzer uses a weighted scoring system based on established health guidelines for BMI, waist-to-height ratios, 
          and the protective effects of physical activity.
        </p>
      }
    />
  );
}

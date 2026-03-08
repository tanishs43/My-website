import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateFitnessScore } from '../../utils/formulas';

export default function FitnessLevelTest() {
  const [age, setAge] = React.useState(25);
  const [restingHR, setRestingHR] = React.useState(70);
  const [pushups, setPushups] = React.useState(20);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateFitnessScore(age, restingHR, pushups);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Fitness Level Test – Assess Your Physical Condition"
      description="Take this simple fitness test to estimate your overall physical condition based on resting heart rate and performance metrics."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <label className="block text-sm font-medium text-slate-400 mb-2">Resting Heart Rate (BPM)</label>
            <input
              type="number"
              value={restingHR}
              onChange={(e) => setRestingHR(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Push-ups (in 1 min)</label>
            <input
              type="number"
              value={pushups}
              onChange={(e) => setPushups(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Your fitness level is a combination of cardiovascular health (reflected in resting heart rate) and muscular endurance (reflected in push-up performance). 
          Regular testing helps you track improvements over time.
        </p>
      }
      howToUse={[
        'Measure your resting heart rate first thing in the morning.',
        'Perform as many push-ups as possible in one minute with good form.',
        'Enter your age and measurements into the fields above.',
        'Click analyze to see your fitness score and category.'
      ]}
      whyUseful={[
        'Identify strengths and weaknesses',
        'Set realistic fitness goals',
        'Monitor health improvements',
        'Stay motivated with data'
      ]}
      relatedTools={['fitness-estimator', 'calorie-burn', 'health-risk']}
      faq={[
        { q: 'What is a good resting heart rate?', a: 'For most adults, a resting heart rate between 60 and 100 BPM is normal. Athletes often have lower rates (40-60 BPM).' },
        { q: 'How often should I test my fitness?', a: 'Testing every 4-8 weeks is a good way to monitor progress without getting discouraged by daily fluctuations.' },
        { q: 'What if I can\'t do many push-ups?', a: 'That\'s okay! Everyone starts somewhere. Focus on improving your own score over time rather than comparing to others.' }
      ]}
      howItWorks={
        <p>
          The test uses a weighted scoring system that combines your cardiovascular efficiency and muscular endurance, 
          adjusted for age-related norms.
        </p>
      }
    />
  );
}

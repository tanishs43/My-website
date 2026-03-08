import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateCalorieBurn } from '../../utils/formulas';

const ACTIVITIES = [
  { name: 'Walking (Moderate)', met: 3.5 },
  { name: 'Running (8 km/h)', met: 8.3 },
  { name: 'Cycling (Moderate)', met: 7.5 },
  { name: 'Swimming (Laps)', met: 7.0 },
  { name: 'Weight Training', met: 5.0 },
  { name: 'Yoga', met: 2.5 },
  { name: 'HIIT', met: 8.0 }
];

export default function CalorieBurnTool() {
  const [weight, setWeight] = React.useState(70);
  const [met, setMet] = React.useState(3.5);
  const [duration, setDuration] = React.useState(30);
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateCalorieBurn(weight, met, duration);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Calorie Burn Tool – Track Your Energy Expenditure"
      description="Calculate how many calories you burn during various physical activities based on your weight and duration."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Activity Type</label>
            <select
              value={met}
              onChange={(e) => setMet(Number(e.target.value))}
            >
              {ACTIVITIES.map(a => (
                <option key={a.name} value={a.met}>{a.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Duration (min)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          Calorie burn depends on your body weight, the intensity of the activity (MET value), and how long you perform it. 
          MET-based equations are commonly used to estimate calories burned during physical activity.
        </p>
      }
      howToUse={[
        'Enter your current body weight in kilograms.',
        'Select the type of activity you performed.',
        'Enter the duration of the activity in minutes.',
        'Click analyze to see your estimated calorie burn.'
      ]}
      whyUseful={[
        'Track daily energy expenditure',
        'Plan workouts for weight loss',
        'Understand activity intensity',
        'Monitor fitness progress'
      ]}
      relatedTools={['tdee', 'calorie-intake', 'macro']}
      faq={[
        { q: 'What is a MET?', a: 'MET stands for Metabolic Equivalent of Task. It is a unit that estimates the amount of energy used by the body during physical activity.' },
        { q: 'How accurate is this calculator?', a: 'It provides a good estimate, but actual burn can vary based on individual metabolism, muscle mass, and exact intensity.' },
        { q: 'Does weight affect calorie burn?', a: 'Yes, heavier individuals typically burn more calories performing the same activity because they require more energy to move their body.' }
      ]}
      howItWorks={
        <p>
          The formula used is: Calories per minute = MET × 3.5 × weight (kg) / 200. 
          This is then multiplied by the duration to get the total energy expenditure.
        </p>
      }
    />
  );
}

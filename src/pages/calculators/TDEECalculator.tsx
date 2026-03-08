import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateBMR, calculateTDEE } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function TDEECalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [activity, setActivity] = React.useState<string>('1.2');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const activityLevels = [
    { label: 'Sedentary (little or no exercise)', value: '1.2' },
    { label: 'Lightly active (exercise 1-3 days/week)', value: '1.375' },
    { label: 'Moderately active (exercise 3-5 days/week)', value: '1.55' },
    { label: 'Active (exercise 6-7 days/week)', value: '1.725' },
    { label: 'Very active (hard exercise 6-7 days/week)', value: '1.9' },
  ];

  const handleCalculate = () => {
    if (weight && height && age) {
      const bmrRes = calculateBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender);
      const tdeeRes = calculateTDEE(bmrRes.value, parseFloat(activity));
      setResult(tdeeRes);
    }
  };

  return (
    <CalculatorTemplate
      title="TDEE Calculator – Total Daily Energy Expenditure"
      description="Calculate your Total Daily Energy Expenditure (TDEE) to understand how many calories you burn each day including physical activity."
      inputs={
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Gender</label>
              <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl">
                <button
                  onClick={() => setGender('male')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${gender === 'male' ? 'bg-neon text-black shadow-lg shadow-neon/20' : 'text-white/40 hover:text-white'}`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${gender === 'female' ? 'bg-neon text-black shadow-lg shadow-neon/20' : 'text-white/40 hover:text-white'}`}
                >
                  Female
                </button>
              </div>
            </div>
            <div>
              <label>Age (years)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 25"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
              />
            </div>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
              />
            </div>
          </div>
          <div>
            <label>Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="1.2">Sedentary (Office job, little to no exercise)</option>
              <option value="1.375">Lightly Active (Light exercise 1-3 days/week)</option>
              <option value="1.55">Moderately Active (Moderate exercise 3-5 days/week)</option>
              <option value="1.725">Very Active (Hard exercise 6-7 days/week)</option>
              <option value="1.9">Extra Active (Very hard exercise & physical job)</option>
            </select>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>
            TDEE is an estimation of how many calories you burn per day when exercise is taken into account. It is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.
          </p>
          <p>
            Since your BMR represents how many calories your body burns when at rest, it is necessary to adjust the numbers upwards based on how much you move throughout the day.
          </p>
        </div>
      }
      referenceChart={
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-white uppercase bg-white/5">
              <tr>
                <th className="px-4 py-3">Activity Level</th>
                <th className="px-4 py-3">Multiplier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr><td className="px-4 py-3">Sedentary</td><td className="px-4 py-3">1.2</td></tr>
              <tr><td className="px-4 py-3">Light exercise</td><td className="px-4 py-3">1.375</td></tr>
              <tr><td className="px-4 py-3">Moderate exercise</td><td className="px-4 py-3">1.55</td></tr>
              <tr><td className="px-4 py-3">Heavy exercise</td><td className="px-4 py-3">1.725</td></tr>
              <tr><td className="px-4 py-3">Athlete</td><td className="px-4 py-3">1.9</td></tr>
            </tbody>
          </table>
        </div>
      }
      tips={[
        "Be honest about your activity level for the most accurate results.",
        "Your TDEE will change as your weight and activity levels change.",
        "Track your daily steps as a simple way to monitor non-exercise activity.",
        "Use TDEE as a starting point for weight loss or gain goals."
      ]}
      relatedCalculators={['calorie-intake', 'bmr', 'macro', 'protein-intake']}
      faq={[
        {
          q: "What is TDEE?",
          a: "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories you burn in a day."
        },
        {
          q: "How accurate is this calculator?",
          a: "It provides a scientifically-backed estimate, but individual metabolism can vary by up to 10-15%."
        },
        {
          q: "Should I eat my TDEE?",
          a: "If you want to maintain your current weight, yes. To lose weight, eat below it; to gain, eat above it."
        }
      ]}
      formula="TDEE = BMR × Activity Factor"
    />
  );
}

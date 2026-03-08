import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateBMR, calculateTDEE, calculateCalorieIntake } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function CalorieIntakeCalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [activity, setActivity] = React.useState<string>('1.2');
  const [goal, setGoal] = React.useState<'maintain' | 'mild-loss' | 'loss' | 'extreme-loss' | 'gain'>('maintain');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight && height && age) {
      const bmrRes = calculateBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender);
      const tdeeRes = calculateTDEE(bmrRes.value, parseFloat(activity));
      const intakeRes = calculateCalorieIntake(tdeeRes.value, goal);
      setResult(intakeRes);
    }
  };

  return (
    <CalculatorTemplate
      title="Calorie Intake Calculator"
      description="Estimate your daily calorie needs for weight maintenance, loss, or gain based on your TDEE and personal goals."
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
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="25" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Weight (kg)</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
            </div>
            <div>
              <label>Height (cm)</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Activity Level</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                <option value="1.2">Sedentary</option>
                <option value="1.375">Light exercise</option>
                <option value="1.55">Moderate exercise</option>
                <option value="1.725">Heavy exercise</option>
                <option value="1.9">Athlete</option>
              </select>
            </div>
            <div>
              <label>Your Goal</label>
              <select value={goal} onChange={(e) => setGoal(e.target.value as any)}>
                <option value="maintain">Maintain weight</option>
                <option value="mild-loss">Mild weight loss</option>
                <option value="loss">Weight loss</option>
                <option value="extreme-loss">Extreme loss</option>
                <option value="gain">Weight gain</option>
              </select>
            </div>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>Weight change occurs when calorie intake differs from calorie expenditure. To lose weight, you need a calorie deficit; to gain weight, a calorie surplus.</p>
          <p>This calculator uses your TDEE as a baseline and adjusts it based on your selected goal.</p>
        </div>
      }
      tips={[
        "Focus on nutrient-dense foods.",
        "Don't cut calories too drastically.",
        "Combine diet with regular exercise.",
        "Track your progress and adjust as needed."
      ]}
      relatedCalculators={['tdee', 'bmr', 'macro', 'protein-intake']}
      faq={[
        { q: "How many calories should I eat to lose weight?", a: "A safe deficit is usually 500 calories below your TDEE." },
        { q: "Is it safe to lose weight fast?", a: "Extreme weight loss can lead to muscle loss and nutrient deficiencies." }
      ]}
      formula="Calories = TDEE ± Goal Adjustment"
    />
  );
}

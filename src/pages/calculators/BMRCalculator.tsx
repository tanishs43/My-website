import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateBMR } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function BMRCalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight && height && age) {
      const res = calculateBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender);
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="BMR Calculator – Basal Metabolic Rate"
      description="Calculate your Basal Metabolic Rate (BMR), the number of calories your body burns at rest to maintain basic vital functions."
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
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>
            Your Basal Metabolic Rate (BMR) is the number of calories your body needs to accomplish its most basic (basal) life-sustaining functions, such as breathing, circulation, and cell production.
          </p>
          <p>
            BMR is most accurately measured in a restrictive setting, but the Mifflin-St Jeor equation provides a reliable estimate for most people.
          </p>
        </div>
      }
      tips={[
        "Muscle mass burns more calories than fat, even at rest.",
        "BMR decreases as you age due to muscle loss.",
        "Eating enough calories is vital to keep your metabolism healthy.",
        "Strength training can help increase your BMR over time."
      ]}
      relatedCalculators={['tdee', 'calorie-intake', 'bmi', 'macro']}
      faq={[
        {
          q: "What is BMR?",
          a: "BMR stands for Basal Metabolic Rate. It is the amount of energy expended while at rest in a neutrally temperate environment."
        },
        {
          q: "How can I increase my BMR?",
          a: "The most effective way to increase BMR is by building lean muscle mass through strength training."
        },
        {
          q: "Does BMR include exercise?",
          a: "No, BMR only accounts for the energy your body uses for basic vital functions. TDEE includes exercise."
        }
      ]}
      formula={gender === 'male' 
        ? "BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5"
        : "BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161"
      }
    />
  );
}

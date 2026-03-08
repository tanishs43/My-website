import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateWaterIntake } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function WaterIntakeTool() {
  const [weight, setWeight] = React.useState<string>('');
  const [exercise, setExercise] = React.useState<string>('30');
  const [hotClimate, setHotClimate] = React.useState<boolean>(false);
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight) {
      const res = calculateWaterIntake(parseFloat(weight), parseFloat(exercise), hotClimate);
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="Water Intake Calculator"
      description="Calculate how much water you should drink daily based on your weight, activity level, and climate."
      inputs={
        <div className="space-y-4">
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
              <label>Daily Exercise (min)</label>
              <input
                type="number"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                placeholder="e.g. 30"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
            <input
              type="checkbox"
              id="hotClimate"
              checked={hotClimate}
              onChange={(e) => setHotClimate(e.target.checked)}
            />
            <label htmlFor="hotClimate" className="mb-0 text-white/60 normal-case font-medium text-sm tracking-normal">
              I live in a hot/humid climate
            </label>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>
            Proper hydration is essential for almost every bodily function, including temperature regulation, joint lubrication, and nutrient transport.
          </p>
          <p>
            This calculator provides a baseline estimate. Your actual needs may vary based on your health status, pregnancy or breastfeeding, and specific environmental conditions.
          </p>
        </div>
      }
      tips={[
        "Drink a glass of water first thing in the morning.",
        "Carry a reusable water bottle with you.",
        "Eat water-rich foods like cucumbers and watermelon.",
        "Don't wait until you're thirsty to drink water."
      ]}
      relatedCalculators={['calorie-intake', 'tdee', 'bmr']}
      faq={[
        {
          q: "How much water do I really need?",
          a: "While 8 glasses a day is a common rule, your needs depend on your weight, activity, and climate."
        },
        {
          q: "Can I drink too much water?",
          a: "Yes, hyponatremia is a rare but serious condition caused by drinking excessive amounts of water in a short time."
        },
        {
          q: "Do other drinks count?",
          a: "Yes, coffee, tea, and juices contribute to your hydration, but water is the best source."
        }
      ]}
      formula="Water (liters) = Weight × 0.033 + Adjustments"
    />
  );
}

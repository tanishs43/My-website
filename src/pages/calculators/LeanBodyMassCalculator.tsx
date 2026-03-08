import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateLeanBodyMass } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function LeanBodyMassCalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [bodyFat, setBodyFat] = React.useState<string>('');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight && bodyFat) {
      const res = calculateLeanBodyMass(parseFloat(weight), parseFloat(bodyFat));
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="Lean Body Mass Calculator"
      description="Calculate your lean body mass, which is your total body weight minus the weight from body fat."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="80" />
          </div>
          <div>
            <label>Body Fat %</label>
            <input type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} placeholder="20" />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>Lean body mass (LBM) is the amount of weight you carry on your body that isn't fat. It includes your bones, muscles, organs, and water.</p>
          <p>Knowing your LBM is useful for athletes and bodybuilders to track muscle growth and for calculating protein needs.</p>
        </div>
      }
      tips={[
        "Track LBM to see if your weight loss is fat or muscle.",
        "Strength training helps maintain or increase LBM.",
        "Ensure adequate protein intake to preserve LBM during weight loss.",
        "LBM is a better indicator of health than total weight for many athletes."
      ]}
      relatedCalculators={['body-fat', 'protein-intake', 'ideal-weight']}
      faq={[
        { q: "Is LBM the same as muscle mass?", a: "No, LBM includes everything that isn't fat (bones, organs, water), whereas muscle mass is just the weight of your muscles." },
        { q: "Why is LBM important?", a: "Higher LBM generally means a higher BMR and better metabolic health." }
      ]}
      formula="LBM = Weight × (1 − Body Fat%)"
    />
  );
}

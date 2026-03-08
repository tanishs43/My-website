import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateProteinIntake } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function ProteinIntakeCalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [activity, setActivity] = React.useState<'sedentary' | 'moderate' | 'muscle-gain'>('sedentary');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight) {
      const res = calculateProteinIntake(parseFloat(weight), activity);
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="Protein Intake Calculator"
      description="Calculate your daily protein requirements based on your body weight and fitness goals."
      inputs={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" />
          </div>
          <div>
            <label>Goal / Activity</label>
            <select value={activity} onChange={(e) => setActivity(e.target.value as any)}>
              <option value="sedentary">Sedentary (0.8g/kg)</option>
              <option value="moderate">Moderate Exercise (1.2g/kg)</option>
              <option value="muscle-gain">Muscle Gain (1.8g/kg)</option>
            </select>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>Protein is essential for building and repairing tissues, making enzymes and hormones, and is a vital building block of bones, muscles, cartilage, skin, and blood.</p>
          <p>Your protein needs depend on your activity level and goals. Athletes and those looking to build muscle require more protein than sedentary individuals.</p>
        </div>
      }
      tips={[
        "Spread protein intake throughout the day.",
        "Include a variety of protein sources.",
        "Combine protein with strength training for muscle growth.",
        "Don't forget about plant-based protein sources."
      ]}
      relatedCalculators={['macro', 'calorie-intake', 'lean-body-mass']}
      faq={[
        { q: "Can I eat too much protein?", a: "For most healthy people, a high-protein diet is safe, but those with kidney issues should consult a doctor." },
        { q: "What are good protein sources?", a: "Chicken, fish, eggs, beans, lentils, and Greek yogurt are excellent sources." }
      ]}
      formula="Protein = Weight (kg) × Factor (0.8 to 2.2)"
    />
  );
}

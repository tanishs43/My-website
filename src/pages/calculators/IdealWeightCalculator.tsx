import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateIdealWeight } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function IdealWeightCalculator() {
  const [height, setHeight] = React.useState<string>('');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (height) {
      const res = calculateIdealWeight(parseFloat(height), gender);
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="Ideal Weight Calculator"
      description="Determine your ideal weight range based on height and gender using scientifically recognized formulas."
      inputs={
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
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 175"
            />
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>
            The Ideal Weight Calculator provides a range of healthy weights based on your height and gender. It uses the Devine and Robinson formulas, which are widely used by medical professionals.
          </p>
          <p>
            It's important to remember that 'ideal weight' is a general guideline. Factors like muscle mass, bone density, and overall body composition also play a significant role in your health.
          </p>
        </div>
      }
      tips={[
        "Focus on body composition rather than just the number on the scale.",
        "Healthy weight varies significantly between individuals.",
        "Combine weight goals with healthy eating and regular exercise.",
        "Consult a doctor for a personalized health assessment."
      ]}
      relatedCalculators={['bmi', 'body-fat', 'bmr', 'lean-body-mass']}
      faq={[
        {
          q: "What is the Devine formula?",
          a: "The Devine formula is a method used to estimate ideal body weight, primarily for medicinal dosing purposes."
        },
        {
          q: "Is ideal weight the same as healthy weight?",
          a: "Ideal weight is a mathematical estimate, while healthy weight is a range where your risk for health problems is lowest."
        },
        {
          q: "Why does height matter for ideal weight?",
          a: "Taller individuals generally have larger frames and more muscle/bone mass, requiring a higher weight to be healthy."
        }
      ]}
      formula="Devine & Robinson Formulas"
    />
  );
}

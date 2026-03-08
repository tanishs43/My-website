import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateBMI } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function BMICalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight && height) {
      const res = calculateBMI(parseFloat(weight), parseFloat(height));
      setResult(res);
    }
  };

  return (
    <CalculatorTemplate
      title="BMI Calculator – Calculate Your Body Mass Index"
      description="Use this BMI calculator to estimate your body mass index based on height and weight. It helps determine whether your weight falls within a healthy range."
      inputs={
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
      }
      onCalculate={handleCalculate}
      result={result}
      visualScale={
        <div className="relative h-4 w-full bg-slate-800 rounded-full overflow-hidden flex">
          <div className="h-full bg-blue-400" style={{ width: '18.5%' }} />
          <div className="h-full bg-emerald-400" style={{ width: '6.5%' }} />
          <div className="h-full bg-amber-400" style={{ width: '5%' }} />
          <div className="h-full bg-red-400" style={{ width: '70%' }} />
          {result && (
            <div 
              className="absolute top-0 w-1 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"
              style={{ left: `${Math.min(100, (result.value / 40) * 100)}%` }}
            />
          )}
        </div>
      }
      explanation={
        <div className="space-y-4">
          <p>
            A BMI between 18.5 and 24.9 is considered healthy. Maintaining a healthy BMI reduces the risk of heart disease, diabetes, and other conditions.
          </p>
          <p>
            Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight and obesity in adults.
          </p>
        </div>
      }
      referenceChart={
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-400">
            <thead className="text-xs text-white uppercase bg-white/5">
              <tr>
                <th className="px-4 py-3">BMI Range</th>
                <th className="px-4 py-3">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr><td className="px-4 py-3">Less than 18.5</td><td className="px-4 py-3">Underweight</td></tr>
              <tr><td className="px-4 py-3">18.5 – 24.9</td><td className="px-4 py-3">Normal weight</td></tr>
              <tr><td className="px-4 py-3">25.0 – 29.9</td><td className="px-4 py-3">Overweight</td></tr>
              <tr><td className="px-4 py-3">30.0 or more</td><td className="px-4 py-3">Obese</td></tr>
            </tbody>
          </table>
        </div>
      }
      tips={[
        "Eat a balanced diet rich in fruits and vegetables.",
        "Exercise regularly (at least 150 minutes per week).",
        "Stay physically active throughout the day.",
        "Monitor your calorie intake and portion sizes."
      ]}
      relatedCalculators={['ideal-weight', 'body-fat', 'bmr', 'calorie-intake']}
      relatedCharts={['bmi-chart', 'body-fat-chart']}
      faq={[
        {
          q: "What is BMI?",
          a: "BMI stands for Body Mass Index. It is a measure of body fat based on height and weight that applies to adult men and women."
        },
        {
          q: "How accurate is BMI?",
          a: "While BMI is a useful screening tool, it does not directly measure body fat and can be misleading for athletes or the elderly."
        },
        {
          q: "What BMI is considered healthy?",
          a: "A BMI between 18.5 and 24.9 is generally considered the healthy range for most adults."
        },
        {
          q: "Can athletes have a high BMI?",
          a: "Yes, because muscle is denser than fat, highly muscular athletes may have a high BMI even if they have low body fat."
        }
      ]}
      formula="BMI = weight (kg) / height² (m²)"
    />
  );
}

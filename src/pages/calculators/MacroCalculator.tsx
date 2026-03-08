import React from 'react';
import CalculatorTemplate from '../../components/CalculatorTemplate';
import { calculateBMR, calculateTDEE, calculateMacros } from '../../utils/formulas';
import { CalculatorResult } from '../../types';

export default function MacroCalculator() {
  const [weight, setWeight] = React.useState<string>('');
  const [height, setHeight] = React.useState<string>('');
  const [age, setAge] = React.useState<string>('');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [activity, setActivity] = React.useState<string>('1.2');
  const [ratio, setRatio] = React.useState<'balanced' | 'low-carb' | 'high-protein'>('balanced');
  const [result, setResult] = React.useState<CalculatorResult | null>(null);

  const handleCalculate = () => {
    if (weight && height && age) {
      const bmrRes = calculateBMR(parseFloat(weight), parseFloat(height), parseInt(age), gender);
      const tdeeRes = calculateTDEE(bmrRes.value, parseFloat(activity));
      const macroRes = calculateMacros(tdeeRes.value, ratio);
      setResult(macroRes);
    }
  };

  return (
    <CalculatorTemplate
      title="Macro Calculator"
      description="Determine your optimal macronutrient split (carbs, protein, and fats) based on your total daily calories and fitness goals."
      inputs={
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Gender</label>
              <div className="flex p-1 bg-white/[0.03] border border-white/10 rounded-xl">
                <button onClick={() => setGender('male')} className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${gender === 'male' ? 'bg-neon text-black shadow-lg shadow-neon/20' : 'text-white/40 hover:text-white'}`}>Male</button>
                <button onClick={() => setGender('female')} className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${gender === 'female' ? 'bg-neon text-black shadow-lg shadow-neon/20' : 'text-white/40 hover:text-white'}`}>Female</button>
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
              <label>Macro Ratio</label>
              <select value={ratio} onChange={(e) => setRatio(e.target.value as any)}>
                <option value="balanced">Balanced (30/40/30)</option>
                <option value="low-carb">Low Carb (40/20/40)</option>
                <option value="high-protein">High Protein (45/35/20)</option>
              </select>
            </div>
          </div>
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <div className="space-y-4">
          <p>Macronutrients (macros) are the nutrients your body needs in large amounts to function: protein, carbohydrates, and fats.</p>
          <p>This calculator estimates your macro targets based on your total calorie expenditure and selected dietary preference.</p>
        </div>
      }
      tips={[
        "Protein: 4 calories per gram.",
        "Carbs: 4 calories per gram.",
        "Fat: 9 calories per gram.",
        "Adjust ratios based on how your body responds."
      ]}
      relatedCalculators={['protein-intake', 'calorie-intake', 'tdee']}
      faq={[
        { q: "What are macros?", a: "Macros are the three main types of nutrients: protein, carbs, and fats." },
        { q: "Which ratio is best for weight loss?", a: "A higher protein ratio often helps with satiety during weight loss." }
      ]}
      formula="Macros = (Calories × Ratio) / Calories per Gram"
    />
  );
}

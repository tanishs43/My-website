import React from 'react';
import ChartTemplate from '../../components/ChartTemplate';

export default function BodyFatChart() {
  const maleCategories = [
    { category: 'Essential Fat', range: '2–5%', color: 'bg-blue-500' },
    { category: 'Athletes', range: '6–13%', color: 'bg-emerald-500' },
    { category: 'Fitness', range: '14–17%', color: 'bg-emerald-400' },
    { category: 'Average', range: '18–24%', color: 'bg-orange-500' },
    { category: 'Obese', range: '25%+', color: 'bg-red-500' }
  ];

  const femaleCategories = [
    { category: 'Essential Fat', range: '10–13%', color: 'bg-blue-500' },
    { category: 'Athletes', range: '14–20%', color: 'bg-emerald-500' },
    { category: 'Fitness', range: '21–24%', color: 'bg-emerald-400' },
    { category: 'Average', range: '25–31%', color: 'bg-orange-500' },
    { category: 'Obese', range: '32%+', color: 'bg-red-500' }
  ];

  return (
    <ChartTemplate
      title="Body Fat Percentage Chart – Health & Fitness Ranges"
      description="Reference ranges for body fat percentage in men and women. Understand how your body composition compares to standard health and fitness categories."
      mainContent={
        <div className="space-y-12">
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Men's Body Fat Categories</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-slate-400 font-semibold">Category</th>
                    <th className="py-4 px-6 text-slate-400 font-semibold">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {maleCategories.map((cat) => (
                    <tr key={cat.category} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                          <span className="text-white font-medium">{cat.category}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-300 font-mono">{cat.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Women's Body Fat Categories</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-slate-400 font-semibold">Category</th>
                    <th className="py-4 px-6 text-slate-400 font-semibold">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {femaleCategories.map((cat) => (
                    <tr key={cat.category} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                          <span className="text-white font-medium">{cat.category}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-300 font-mono">{cat.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
      explanation={
        <p>
          Body fat percentage is a measure of fitness level, as it is the only body measurement which directly calculates a person's relative body composition without regard to height or weight. 
          The American Council on Exercise (ACE) provides these standard ranges for men and women.
        </p>
      }
      categoryExplanation={[
        { category: 'Essential Fat', description: 'The minimum amount of fat required for physical and physiological health.' },
        { category: 'Athletes', description: 'Low body fat levels typical of highly active individuals and competitive athletes.' },
        { category: 'Fitness', description: 'Healthy body fat levels for individuals who exercise regularly.' },
        { category: 'Average', description: 'Standard body fat ranges for the general population.' },
        { category: 'Obese', description: 'Higher body fat levels that may increase the risk of health complications.' }
      ]}
      howToUse={[
        'Calculate your body fat percentage using our Body Fat Calculator.',
        'Select your gender on the chart.',
        'Find your percentage value in the ranges provided.',
        'Identify your fitness category.'
      ]}
      relatedCalculators={['body-fat', 'lean-body-mass', 'bmi', 'ideal-weight']}
      relatedCharts={['bmi-chart', 'ideal-weight-chart']}
      faq={[
        { q: 'Why do women have higher body fat ranges?', a: 'Women naturally require more body fat for hormonal function and reproductive health.' },
        { q: 'Is body fat more accurate than BMI?', a: 'Generally, yes, as it distinguishes between muscle mass and fat mass, providing a better picture of body composition.' },
        { q: 'How can I lower my body fat percentage?', a: 'A combination of resistance training (to build muscle) and a slight calorie deficit is usually the most effective approach.' }
      ]}
    />
  );
}

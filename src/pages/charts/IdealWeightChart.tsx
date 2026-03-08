import React from 'react';
import ChartTemplate from '../../components/ChartTemplate';

export default function IdealWeightChart() {
  const heightWeightData = [
    { height: '152 cm (5\'0")', male: '52–56 kg', female: '45–50 kg' },
    { height: '160 cm (5\'3")', male: '56–61 kg', female: '49–54 kg' },
    { height: '168 cm (5\'6")', male: '61–67 kg', female: '53–59 kg' },
    { height: '175 cm (5\'9")', male: '66–72 kg', female: '58–64 kg' },
    { height: '183 cm (6\'0")', male: '71–78 kg', female: '62–69 kg' },
    { height: '191 cm (6\'3")', male: '77–84 kg', female: '67–74 kg' }
  ];

  return (
    <ChartTemplate
      title="Ideal Weight Chart – Healthy Weight Range by Height"
      description="Find the recommended healthy weight range based on your height and gender. This chart uses established formulas to provide a target weight range for optimal health."
      mainContent={
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-slate-400 font-semibold">Height</th>
                <th className="py-4 px-6 text-slate-400 font-semibold">Male Range</th>
                <th className="py-4 px-6 text-slate-400 font-semibold">Female Range</th>
              </tr>
            </thead>
            <tbody>
              {heightWeightData.map((row) => (
                <tr key={row.height} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-white font-medium">{row.height}</td>
                  <td className="py-4 px-6 text-emerald-400 font-mono">{row.male}</td>
                  <td className="py-4 px-6 text-emerald-400 font-mono">{row.female}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      explanation={
        <p>
          Ideal weight charts provide a general target for body weight based on height and gender. 
          While these ranges are helpful for many, they do not account for individual differences in muscle mass, bone density, and overall body composition. 
          The values shown are based on the Devine and Robinson formulas.
        </p>
      }
      howToUse={[
        'Find your height in the left column.',
        'Look across to the column matching your gender.',
        'Identify the target weight range for your height.',
        'Use this as a general guide for your health goals.'
      ]}
      relatedCalculators={['ideal-weight', 'bmi', 'body-fat', 'bmr']}
      relatedCharts={['bmi-chart', 'body-fat-chart']}
      faq={[
        { q: 'What is an ideal weight chart?', a: 'It is a reference table that suggests healthy weight ranges for adults based on their height and gender.' },
        { q: 'Are these ranges absolute?', a: 'No, they are general estimates. A person might be outside these ranges and still be healthy if they have high muscle mass or a different body frame.' },
        { q: 'Which formula is used?', a: 'This chart incorporates averages from the Devine and Robinson formulas, which are standard in clinical settings.' }
      ]}
    />
  );
}

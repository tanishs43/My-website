import React from 'react';
import ChartTemplate from '../../components/ChartTemplate';

export default function BMIChart() {
  const categories = [
    { category: 'Underweight', range: '< 18.5', color: 'bg-blue-500' },
    { category: 'Normal weight', range: '18.5 – 24.9', color: 'bg-emerald-500' },
    { category: 'Overweight', range: '25 – 29.9', color: 'bg-orange-500' },
    { category: 'Obese', range: '≥ 30', color: 'bg-red-500' }
  ];

  return (
    <ChartTemplate
      title="BMI Chart – Healthy Weight Range by Height"
      description="This BMI chart helps you understand the healthy weight range for your height. It categorizes BMI into underweight, normal weight, overweight, and obesity ranges."
      mainContent={
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-slate-400 font-semibold">BMI Category</th>
                <th className="py-4 px-6 text-slate-400 font-semibold">BMI Range</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
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
      }
      visualChart={
        <div className="flex h-12 w-full rounded-xl overflow-hidden shadow-inner">
          <div className="bg-blue-500 h-full" style={{ width: '18.5%' }} title="Underweight" />
          <div className="bg-emerald-500 h-full" style={{ width: '25%' }} title="Normal" />
          <div className="bg-orange-500 h-full" style={{ width: '15%' }} title="Overweight" />
          <div className="bg-red-500 h-full" style={{ width: '41.5%' }} title="Obese" />
        </div>
      }
      explanation={
        <p>
          The BMI chart helps determine whether a person's weight falls within a healthy range based on their height. 
          Higher BMI values may indicate increased health risks such as heart disease or diabetes. 
          BMI is commonly used as a quick screening tool to assess weight-related health risks.
        </p>
      }
      categoryExplanation={[
        { category: 'Underweight', description: 'A BMI below 18.5 indicates that body weight may be too low for optimal health.' },
        { category: 'Normal Weight', description: 'A BMI between 18.5 and 24.9 is generally considered healthy for most adults.' },
        { category: 'Overweight', description: 'A BMI between 25 and 29.9 indicates higher body weight relative to height.' },
        { category: 'Obesity', description: 'A BMI of 30 or higher may increase the risk of chronic health conditions.' }
      ]}
      howToUse={[
        'Calculate your BMI using our BMI calculator.',
        'Find your BMI value on the chart.',
        'Check the corresponding weight category.',
        'Identify where you fall in the BMI range.'
      ]}
      relatedCalculators={['bmi', 'body-fat', 'ideal-weight', 'bmr']}
      relatedCharts={['body-fat-chart', 'ideal-weight-chart']}
      faq={[
        { q: 'What is a BMI chart?', a: 'It is a reference table that shows the standard weight categories based on Body Mass Index values.' },
        { q: 'How accurate is BMI for measuring health?', a: 'BMI is a useful screening tool but does not directly measure body fat or account for muscle mass.' },
        { q: 'What BMI is considered healthy?', a: 'A BMI between 18.5 and 24.9 is considered the healthy range for most adults.' },
        { q: 'Can athletes have a high BMI?', a: 'Yes, because muscle is denser than fat, highly muscular individuals may have a high BMI despite having low body fat.' }
      ]}
    />
  );
}

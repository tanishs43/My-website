import React from 'react';
import ToolTemplate from '../../components/ToolTemplate';
import { calculateSleepCycles } from '../../utils/formulas';

export default function SleepCycleCalculator() {
  const [wakeTime, setWakeTime] = React.useState('07:00');
  const [result, setResult] = React.useState<any>(null);

  const handleCalculate = () => {
    const res = calculateSleepCycles(wakeTime);
    setResult(res);
  };

  return (
    <ToolTemplate
      title="Sleep Cycle Calculator – Wake Up Refreshed"
      description="Calculate the best time to go to sleep or wake up based on 90-minute sleep cycles to avoid waking up groggy."
      inputs={
        <div className="max-w-xs mx-auto">
          <label>I want to wake up at:</label>
          <input
            type="time"
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
          />
        </div>
      }
      onCalculate={handleCalculate}
      result={result}
      explanation={
        <p>
          The average sleep cycle is about 90 minutes long. Waking up at the end of a cycle, rather than in the middle of one, 
          helps you feel more refreshed and alert. Most adults need 5-6 cycles per night.
        </p>
      }
      howToUse={[
        'Decide what time you need to wake up.',
        'Enter that time into the calculator.',
        'Click analyze to see recommended bedtimes.',
        'Try to be in bed and ready to sleep by the suggested time.'
      ]}
      whyUseful={[
        'Reduce morning grogginess',
        'Improve sleep quality',
        'Optimize daily energy levels',
        'Establish a consistent sleep routine'
      ]}
      relatedTools={['health-risk', 'fitness-estimator']}
      faq={[
        { q: 'How long is a sleep cycle?', a: 'An average sleep cycle lasts about 90 minutes, though it can vary slightly between individuals.' },
        { q: 'How many cycles do I need?', a: 'Most people feel best with 5 or 6 complete sleep cycles (7.5 to 9 hours of sleep).' },
        { q: 'What if I wake up during a cycle?', a: 'Waking up during deep sleep (the middle of a cycle) often leads to sleep inertia, making you feel tired and groggy.' }
      ]}
      howItWorks={
        <p>
          This tool works backwards from your desired wake time in 90-minute increments. 
          It suggests bedtimes that align with the completion of full sleep cycles.
        </p>
      }
    />
  );
}

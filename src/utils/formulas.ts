/**
 * Health Calculation Formulas
 */

// 1. BMI Calculator
export const calculateBMI = (weightKg: number, heightCm: number) => {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  
  let category = '';
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';
  
  return {
    value: parseFloat(bmi.toFixed(1)),
    category,
    message: `Your BMI is ${bmi.toFixed(1)}, which falls within the ${category.toLowerCase()} category.`
  };
};

// 2. BMR Calculator
export const calculateBMR = (weightKg: number, heightCm: number, age: number, gender: 'male' | 'female') => {
  // Mifflin-St Jeor Equation
  let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
  bmr = gender === 'male' ? bmr + 5 : bmr - 161;
  
  return {
    value: Math.round(bmr),
    category: 'Basal Metabolic Rate',
    message: `Your BMR is ${Math.round(bmr)} calories per day.`
  };
};

// 3. TDEE Calculator
export const calculateTDEE = (bmr: number, activityLevel: number) => {
  const tdee = bmr * activityLevel;
  return {
    value: Math.round(tdee),
    category: 'Total Daily Energy Expenditure',
    message: `Your estimated TDEE is ${Math.round(tdee)} calories per day.`
  };
};

// 4. Calorie Intake Calculator
export const calculateCalorieIntake = (tdee: number, goal: 'maintain' | 'mild-loss' | 'loss' | 'extreme-loss' | 'gain') => {
  let calories = tdee;
  let category = 'Maintenance Calories';
  
  switch (goal) {
    case 'mild-loss':
      calories = tdee - 250;
      category = 'Mild Weight Loss';
      break;
    case 'loss':
      calories = tdee - 500;
      category = 'Weight Loss';
      break;
    case 'extreme-loss':
      calories = tdee - 1000;
      category = 'Extreme Weight Loss';
      break;
    case 'gain':
      calories = tdee + 500;
      category = 'Weight Gain';
      break;
  }
  
  return {
    value: Math.round(calories),
    category,
    message: `To achieve your goal of ${category.toLowerCase()}, you should consume approximately ${Math.round(calories)} calories per day.`
  };
};

// 5. Body Fat Percentage Calculator (U.S. Navy Method)
export const calculateBodyFat = (
  gender: 'male' | 'female',
  heightCm: number,
  neckCm: number,
  waistCm: number,
  hipCm?: number
) => {
  let bodyFat = 0;
  
  if (gender === 'male') {
    // 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76
    bodyFat = 86.010 * Math.log10(waistCm - neckCm) - 70.041 * Math.log10(heightCm) + 36.76;
  } else if (gender === 'female' && hipCm) {
    // 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387
    bodyFat = 163.205 * Math.log10(waistCm + hipCm - neckCm) - 97.684 * Math.log10(heightCm) - 78.387;
  }
  
  let category = '';
  if (gender === 'male') {
    if (bodyFat < 6) category = 'Essential Fat';
    else if (bodyFat < 14) category = 'Athletes';
    else if (bodyFat < 18) category = 'Fitness';
    else if (bodyFat < 25) category = 'Average';
    else category = 'Obese';
  } else {
    if (bodyFat < 14) category = 'Essential Fat';
    else if (bodyFat < 21) category = 'Athletes';
    else if (bodyFat < 25) category = 'Fitness';
    else if (bodyFat < 32) category = 'Average';
    else category = 'Obese';
  }

  return {
    value: parseFloat(bodyFat.toFixed(1)),
    category,
    message: `Your estimated body fat percentage is ${bodyFat.toFixed(1)}%.`
  };
};

// 6. Ideal Weight Calculator
export const calculateIdealWeight = (heightCm: number, gender: 'male' | 'female') => {
  const heightInches = heightCm / 2.54;
  const inchesOver5Feet = Math.max(0, heightInches - 60);
  
  // Devine Formula
  const devine = gender === 'male' 
    ? 50 + 2.3 * inchesOver5Feet 
    : 45.5 + 2.3 * inchesOver5Feet;
    
  // Robinson Formula
  const robinson = gender === 'male'
    ? 52 + 1.9 * inchesOver5Feet
    : 49 + 1.7 * inchesOver5Feet;
    
  return {
    value: parseFloat(((devine + robinson) / 2).toFixed(1)),
    category: 'Ideal Weight Range',
    message: `Based on the Devine and Robinson formulas, your ideal weight is between ${devine.toFixed(1)} kg and ${robinson.toFixed(1)} kg.`
  };
};

// 7. Protein Intake Calculator
export const calculateProteinIntake = (weightKg: number, activityLevel: 'sedentary' | 'moderate' | 'muscle-gain') => {
  let proteinFactor = 0.8;
  if (activityLevel === 'moderate') proteinFactor = 1.2;
  else if (activityLevel === 'muscle-gain') proteinFactor = 1.8; // 1.6-2.2 range
  
  const protein = weightKg * proteinFactor;
  
  return {
    value: Math.round(protein),
    category: 'Daily Protein Goal',
    message: `Your daily protein requirement is approximately ${Math.round(protein)} grams.`
  };
};

// 8. Macro Calculator
export const calculateMacros = (calories: number, ratio: 'balanced' | 'low-carb' | 'high-protein') => {
  let pRatio = 0.3, cRatio = 0.4, fRatio = 0.3; // Balanced
  
  if (ratio === 'low-carb') {
    pRatio = 0.4; cRatio = 0.2; fRatio = 0.4;
  } else if (ratio === 'high-protein') {
    pRatio = 0.45; cRatio = 0.35; fRatio = 0.2;
  }
  
  const protein = (calories * pRatio) / 4;
  const carbs = (calories * cRatio) / 4;
  const fat = (calories * fRatio) / 9;
  
  return {
    value: calories,
    category: 'Macronutrient Split',
    message: `Protein: ${Math.round(protein)}g, Carbs: ${Math.round(carbs)}g, Fat: ${Math.round(fat)}g`,
    details: JSON.stringify({ protein: Math.round(protein), carbs: Math.round(carbs), fat: Math.round(fat) })
  };
};

// 9. Lean Body Mass Calculator
export const calculateLeanBodyMass = (weightKg: number, bodyFatPercentage: number) => {
  const lbm = weightKg * (1 - bodyFatPercentage / 100);
  
  return {
    value: parseFloat(lbm.toFixed(1)),
    category: 'Lean Body Mass',
    message: `Your lean body mass is ${lbm.toFixed(1)} kg.`
  };
};

// 11. Body Shape Analyzer
export const calculateBodyShape = (bust: number, waist: number, hip: number) => {
  const bustHipRatio = bust / hip;
  const waistBustRatio = waist / bust;
  const waistHipRatio = waist / hip;

  if (bustHipRatio >= 0.95 && bustHipRatio <= 1.05 && waistBustRatio <= 0.75 && waistHipRatio <= 0.75) {
    return {
      category: 'Hourglass',
      message: 'Your bust and hips are similar in size with a well-defined waist.',
      value: 'Hourglass'
    };
  } else if (hip > bust * 1.05 && waistHipRatio <= 0.8) {
    return {
      category: 'Pear',
      message: 'Your hips are wider than your bust and waist.',
      value: 'Pear'
    };
  } else if (waist >= bust * 0.95 || waist >= hip * 0.95) {
    return {
      category: 'Apple',
      message: 'Your waist is wider than or similar to your bust and hips.',
      value: 'Apple'
    };
  } else if (bustHipRatio >= 0.95 && bustHipRatio <= 1.05 && waistBustRatio > 0.75) {
    return {
      category: 'Rectangle',
      message: 'Your bust, waist, and hips are fairly uniform in size.',
      value: 'Rectangle'
    };
  } else if (bust > hip * 1.05) {
    return {
      category: 'Inverted Triangle',
      message: 'Your bust is wider than your hips.',
      value: 'Inverted Triangle'
    };
  }

  return {
    category: 'Balanced',
    message: 'Your body proportions are fairly balanced.',
    value: 'Balanced'
  };
};

// 12. Calorie Burn Tool
export const calculateCalorieBurn = (weight: number, met: number, duration: number) => {
  const caloriesPerMinute = (met * 3.5 * weight) / 200;
  const totalBurned = Math.round(caloriesPerMinute * duration);
  
  return {
    value: totalBurned,
    category: 'Calories Burned',
    message: `You burned approximately ${totalBurned} calories during this activity.`
  };
};

// 13. Sleep Cycle Calculator
export const calculateSleepCycles = (wakeTime: string) => {
  const [hours, minutes] = wakeTime.split(':').map(Number);
  const wakeDate = new Date();
  wakeDate.setHours(hours, minutes, 0, 0);

  const cycles = [6, 5, 4, 3];
  const bedtimeOptions = cycles.map(c => {
    const bedtime = new Date(wakeDate.getTime() - (c * 90 * 60 * 1000));
    return bedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  return {
    value: bedtimeOptions[0],
    category: 'Best Bedtime',
    message: `For 6 cycles (9 hours of sleep), go to bed at ${bedtimeOptions[0]}.`,
    details: `Other options: ${bedtimeOptions.slice(1).join(', ')}`
  };
};

// 14. Fitness Level Test
export const calculateFitnessScore = (age: number, restingHR: number, pushups: number) => {
  let score = 0;
  
  if (restingHR < 60) score += 40;
  else if (restingHR < 70) score += 30;
  else if (restingHR < 80) score += 20;
  else score += 10;

  if (pushups > 30) score += 40;
  else if (pushups > 20) score += 30;
  else if (pushups > 10) score += 20;
  else score += 10;

  score -= (age / 10);

  let category = 'Beginner';
  if (score > 70) category = 'Advanced';
  else if (score > 40) category = 'Intermediate';

  return {
    value: Math.round(score),
    category: category,
    message: `Your fitness score is ${Math.round(score)}/100, which is ${category} level.`
  };
};

// 15. Weight Loss Planner
export const calculateWeightLossPlanner = (weight: number, goalWeight: number, deficit: number) => {
  const weightToLose = weight - goalWeight;
  if (weightToLose <= 0) return null;

  const totalCaloriesToLose = weightToLose * 7700;
  const daysToGoal = Math.round(totalCaloriesToLose / deficit);
  
  return {
    value: daysToGoal,
    category: 'Days to Goal',
    message: `At a ${deficit} calorie deficit, you will reach your goal in approximately ${daysToGoal} days.`
  };
};

// 10. Water Intake Calculator
export const calculateWaterIntake = (weightKg: number, exerciseMinutes: number = 0, hotClimate: boolean = false) => {
  let water = weightKg * 0.033;
  water += (exerciseMinutes / 30) * 0.5;
  if (hotClimate) water += 0.5;
  
  return {
    value: parseFloat(water.toFixed(2)),
    category: 'Daily Water Intake',
    message: `You should drink approximately ${water.toFixed(2)} liters of water per day.`
  };
};

// 16. Health Risk Analyzer
export const calculateHealthRisk = (bmi: number, waist: number, age: number, activityLevel: number) => {
  let riskScore = 0;
  
  if (bmi > 30) riskScore += 3;
  else if (bmi > 25) riskScore += 2;
  
  if (waist > 100) riskScore += 3;
  else if (waist > 90) riskScore += 2;

  if (age > 50) riskScore += 2;
  
  if (activityLevel < 1.3) riskScore += 2;

  let risk = 'Low';
  if (riskScore > 6) risk = 'High';
  else if (riskScore > 3) risk = 'Moderate';

  return {
    value: riskScore,
    category: `${risk} Risk`,
    message: `Based on your metrics, your overall health risk profile is ${risk}.`
  };
};

// 17. Daily Diet Planner
export const calculateDietPlan = (tdee: number) => {
  const protein = (tdee * 0.3) / 4;
  const carbs = (tdee * 0.4) / 4;
  const fat = (tdee * 0.3) / 9;
  
  return {
    value: tdee,
    category: 'Daily Calorie Target',
    message: `Target: ${tdee} kcal. Protein: ${Math.round(protein)}g, Carbs: ${Math.round(carbs)}g, Fat: ${Math.round(fat)}g`,
    details: 'This plan follows a 30/40/30 macro split.'
  };
};

// 18. Habit Tracker Success Rate
export const calculateHabitSuccess = (completedDays: number, totalDays: number) => {
  const rate = (completedDays / totalDays) * 100;
  return {
    value: Math.round(rate),
    category: 'Success Rate',
    message: `Your habit consistency is ${Math.round(rate)}%.`,
    details: `${completedDays} out of ${totalDays} days completed.`
  };
};



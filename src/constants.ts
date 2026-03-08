import { CalculatorInfo, BlogPost } from './types';

export const CALCULATORS: CalculatorInfo[] = [
  {
    id: 'bmi',
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index to see if you are at a healthy weight.',
    icon: 'Activity',
    path: '/calculators/bmi',
    category: 'calculator'
  },
  {
    id: 'bmr',
    title: 'BMR Calculator',
    description: 'Find out your Basal Metabolic Rate, the calories you burn at rest.',
    icon: 'Zap',
    path: '/calculators/bmr',
    category: 'calculator'
  },
  {
    id: 'tdee',
    title: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure based on activity level.',
    icon: 'Flame',
    path: '/calculators/tdee',
    category: 'calculator'
  },
  {
    id: 'calorie-intake',
    title: 'Calorie Calculator',
    description: 'Estimate your daily calorie needs for weight maintenance, loss, or gain.',
    icon: 'Utensils',
    path: '/calculators/calorie-intake',
    category: 'calculator'
  },
  {
    id: 'body-fat',
    title: 'Body Fat Calculator',
    description: 'Estimate your body fat percentage using standard body measurements.',
    icon: 'Percent',
    path: '/calculators/body-fat',
    category: 'calculator'
  },
  {
    id: 'ideal-weight',
    title: 'Ideal Weight Calculator',
    description: 'Determine your ideal weight range based on height and gender.',
    icon: 'Scale',
    path: '/calculators/ideal-weight',
    category: 'calculator'
  },
  {
    id: 'protein-intake',
    title: 'Protein Calculator',
    description: 'Calculate your daily protein requirements based on your goals.',
    icon: 'Dumbbell',
    path: '/calculators/protein-intake',
    category: 'calculator'
  },
  {
    id: 'macro',
    title: 'Macro Calculator',
    description: 'Determine your optimal macronutrient split for your specific goals.',
    icon: 'PieChart',
    path: '/calculators/macro',
    category: 'calculator'
  },
  {
    id: 'lean-body-mass',
    title: 'Lean Body Mass Calculator',
    description: 'Calculate your weight excluding body fat.',
    icon: 'UserCheck',
    path: '/calculators/lean-body-mass',
    category: 'calculator'
  },
  {
    id: 'water-intake',
    title: 'Water Intake Calculator',
    description: 'Calculate how much water you should drink daily based on weight and activity.',
    icon: 'Droplets',
    path: '/calculators/water-intake',
    category: 'calculator'
  }
];

export const TOOLS: CalculatorInfo[] = [
  {
    id: 'body-shape',
    title: 'Body Shape Analyzer',
    description: 'Identify your body shape (pear, apple, hourglass, etc.) based on measurements.',
    icon: 'User',
    path: '/tools/body-shape',
    category: 'tool'
  },
  {
    id: 'calorie-burn',
    title: 'Calorie Burn Tool',
    description: 'Calculate how many calories you burn during various physical activities.',
    icon: 'Flame',
    path: '/tools/calorie-burn',
    category: 'tool'
  },
  {
    id: 'sleep-cycle',
    title: 'Sleep Cycle Calculator',
    description: 'Find the best time to wake up or go to sleep based on sleep cycles.',
    icon: 'Moon',
    path: '/tools/sleep-cycle',
    category: 'tool'
  },
  {
    id: 'fitness-test',
    title: 'Fitness Level Test',
    description: 'Assess your overall fitness level based on heart rate and performance.',
    icon: 'Dumbbell',
    path: '/tools/fitness-test',
    category: 'tool'
  },
  {
    id: 'weight-loss-planner',
    title: 'Weight Loss Planner',
    description: 'Plan your weight loss journey with estimated timelines and calorie targets.',
    icon: 'Calendar',
    path: '/tools/weight-loss-planner',
    category: 'tool'
  },
  {
    id: 'water-tracker',
    title: 'Water Tracker',
    description: 'Track your daily water intake and stay hydrated throughout the day.',
    icon: 'Droplets',
    path: '/tools/water-tracker',
    category: 'tool'
  },
  {
    id: 'fitness-estimator',
    title: 'Fitness Level Estimator',
    description: 'Estimate your fitness level based on daily steps and activity.',
    icon: 'Activity',
    path: '/tools/fitness-estimator',
    category: 'tool'
  },
  {
    id: 'health-risk',
    title: 'Health Risk Analyzer',
    description: 'Analyze potential health risks based on BMI, age, and lifestyle.',
    icon: 'AlertTriangle',
    path: '/tools/health-risk',
    category: 'tool'
  },
  {
    id: 'diet-planner',
    title: 'Daily Diet Planner',
    description: 'Plan your daily meals and macronutrient intake for optimal health.',
    icon: 'Utensils',
    path: '/tools/diet-planner',
    category: 'tool'
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'Track your healthy habits and stay consistent with your routine.',
    icon: 'CheckCircle',
    path: '/tools/habit-tracker',
    category: 'tool'
  }
];

export const CHARTS: CalculatorInfo[] = [
  {
    id: 'bmi-chart',
    title: 'BMI Chart',
    description: 'View the standard BMI categories and weight ranges by height.',
    icon: 'BarChart3',
    path: '/charts/bmi',
    category: 'chart'
  },
  {
    id: 'body-fat-chart',
    title: 'Body Fat Chart',
    description: 'Reference ranges for body fat percentage in men and women.',
    icon: 'Percent',
    path: '/charts/body-fat',
    category: 'chart'
  },
  {
    id: 'ideal-weight-chart',
    title: 'Ideal Weight Chart',
    description: 'Find the recommended healthy weight range based on height and gender.',
    icon: 'Scale',
    path: '/charts/ideal-weight',
    category: 'chart'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'What Is BMI?',
    excerpt: 'Learn what Body Mass Index means, how it is calculated, and why it is used to evaluate body weight.',
    date: 'March 15, 2024',
    category: 'Weight Management',
    image: 'https://picsum.photos/seed/health1/800/600',
    slug: 'what-is-bmi'
  },
  {
    id: '2',
    title: 'Healthy BMI Range',
    excerpt: 'Discover what BMI range is considered healthy and how it varies depending on age and gender.',
    date: 'March 12, 2024',
    category: 'Weight Management',
    image: 'https://picsum.photos/seed/health2/800/600',
    slug: 'healthy-bmi-range'
  },
  {
    id: '3',
    title: 'How to Reduce Body Fat',
    excerpt: 'Understand effective strategies for reducing body fat through diet, exercise, and lifestyle changes.',
    date: 'March 10, 2024',
    category: 'Body Composition',
    image: 'https://picsum.photos/seed/health3/800/600',
    slug: 'reduce-body-fat'
  },
  {
    id: '4',
    title: 'BMI Chart Explained',
    excerpt: 'A deep dive into the BMI chart and how to read it correctly for your health goals.',
    date: 'March 08, 2024',
    category: 'Weight Management',
    image: 'https://picsum.photos/seed/health4/800/600',
    slug: 'bmi-chart-explained'
  }
];

export const BLOG_CATEGORIES = [
  'Weight Management',
  'Body Composition',
  'Fitness & Exercise',
  'Nutrition',
  'Healthy Lifestyle'
];

export interface CalculatorInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  category: 'calculator' | 'tool' | 'chart';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export interface CalculatorResult {
  value: number;
  category: string;
  message: string;
  details?: string;
}

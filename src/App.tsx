import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CalculatorsList from './pages/CalculatorsList';
import BMICalculator from './pages/calculators/BMICalculator';
import BMRCalculator from './pages/calculators/BMRCalculator';
import TDEECalculator from './pages/calculators/TDEECalculator';
import IdealWeightCalculator from './pages/calculators/IdealWeightCalculator';
import CalorieIntakeCalculator from './pages/calculators/CalorieIntakeCalculator';
import BodyFatCalculator from './pages/calculators/BodyFatCalculator';
import ProteinIntakeCalculator from './pages/calculators/ProteinIntakeCalculator';
import MacroCalculator from './pages/calculators/MacroCalculator';
import LeanBodyMassCalculator from './pages/calculators/LeanBodyMassCalculator';
import WaterIntakeTool from './pages/tools/WaterIntakeTool';
import BodyShapeAnalyzer from './pages/tools/BodyShapeAnalyzer';
import CalorieBurnTool from './pages/tools/CalorieBurnTool';
import SleepCycleCalculator from './pages/tools/SleepCycleCalculator';
import FitnessLevelTest from './pages/tools/FitnessLevelTest';
import WeightLossPlanner from './pages/tools/WeightLossPlanner';
import WaterTracker from './pages/tools/WaterTracker';
import FitnessLevelEstimator from './pages/tools/FitnessLevelEstimator';
import HealthRiskAnalyzer from './pages/tools/HealthRiskAnalyzer';
import DailyDietPlanner from './pages/tools/DailyDietPlanner';
import HabitTracker from './pages/tools/HabitTracker';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ToolsList from './pages/ToolsList';
import ChartsList from './pages/ChartsList';
import BMIChart from './pages/charts/BMIChart';
import BodyFatChart from './pages/charts/BodyFatChart';
import IdealWeightChart from './pages/charts/IdealWeightChart';
import About from './pages/About';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50 selection:bg-emerald-500/30">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculators" element={<CalculatorsList />} />
              <Route path="/calculators/bmi" element={<BMICalculator />} />
              <Route path="/calculators/bmr" element={<BMRCalculator />} />
              <Route path="/calculators/tdee" element={<TDEECalculator />} />
              <Route path="/calculators/calorie-intake" element={<CalorieIntakeCalculator />} />
              <Route path="/calculators/body-fat" element={<BodyFatCalculator />} />
              <Route path="/calculators/ideal-weight" element={<IdealWeightCalculator />} />
              <Route path="/calculators/protein-intake" element={<ProteinIntakeCalculator />} />
              <Route path="/calculators/macro" element={<MacroCalculator />} />
              <Route path="/calculators/lean-body-mass" element={<LeanBodyMassCalculator />} />
              <Route path="/calculators/water-intake" element={<WaterIntakeTool />} />
              
              <Route path="/tools" element={<ToolsList />} />
              <Route path="/tools/body-shape" element={<BodyShapeAnalyzer />} />
              <Route path="/tools/calorie-burn" element={<CalorieBurnTool />} />
              <Route path="/tools/sleep-cycle" element={<SleepCycleCalculator />} />
              <Route path="/tools/fitness-test" element={<FitnessLevelTest />} />
              <Route path="/tools/weight-loss-planner" element={<WeightLossPlanner />} />
              <Route path="/tools/water-tracker" element={<WaterTracker />} />
              <Route path="/tools/fitness-estimator" element={<FitnessLevelEstimator />} />
              <Route path="/tools/health-risk" element={<HealthRiskAnalyzer />} />
              <Route path="/tools/diet-planner" element={<DailyDietPlanner />} />
              <Route path="/tools/habit-tracker" element={<HabitTracker />} />
              
              <Route path="/charts" element={<ChartsList />} />
              <Route path="/charts/bmi" element={<BMIChart />} />
              <Route path="/charts/body-fat" element={<BodyFatChart />} />
              <Route path="/charts/ideal-weight" element={<IdealWeightChart />} />
              
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={
                <div className="pt-40 pb-20 text-center">
                  <h1 className="text-4xl font-display font-bold text-white mb-4">Page Under Construction</h1>
                  <p className="text-slate-400 mb-8">We're working hard to bring you more health tools!</p>
                  <Link to="/" className="text-emerald-400 hover:text-emerald-300 font-medium">Return Home</Link>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

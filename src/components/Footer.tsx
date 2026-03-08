import { Link } from 'react-router-dom';
import { Activity, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-white">VitalMetrics</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional health calculators and body metrics tools designed to help you understand your body and improve your health.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Calculators</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/calculators/bmi" className="hover:text-emerald-400 transition-colors">BMI Calculator</Link></li>
              <li><Link to="/calculators/bmr" className="hover:text-emerald-400 transition-colors">BMR Calculator</Link></li>
              <li><Link to="/calculators/tdee" className="hover:text-emerald-400 transition-colors">TDEE Calculator</Link></li>
              <li><Link to="/calculators/body-fat" className="hover:text-emerald-400 transition-colors">Body Fat Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/charts" className="hover:text-emerald-400 transition-colors">Health Charts</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Health Guides</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-emerald-400 transition-colors">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} VitalMetrics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

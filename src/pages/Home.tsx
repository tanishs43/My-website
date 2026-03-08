import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, Flame, ChevronRight, BarChart3, BookOpen, Info } from 'lucide-react';
import { CALCULATORS, TOOLS, BLOG_POSTS, CHARTS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

export default function Home() {
  return (
    <div className="hero-gradient">
      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-luxury mb-6">VitalMetrics / Professional Grade</div>
                <h1 className="text-4xl lg:text-7xl mb-10 font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
                  Precision <span className="text-white/20">Health</span> <br />
                  <span className="text-neon">Analytics.</span>
                </h1>
                <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl border-l border-neon/30 pl-8">
                  The world's most comprehensive suite of health calculators and biometric analysis tools. Designed for performance.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link
                    to="/calculators/bmi"
                    className="group relative px-10 py-5 bg-neon text-black rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-500 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Analysis
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Link>
                  <Link
                    to="/calculators"
                    className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.3em] transition-colors"
                  >
                    Explore Suite
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12 relative">
                  <div className="absolute inset-0 border border-neon/20 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <Activity className="w-32 h-32 text-neon opacity-20" />
                  
                  {/* Floating Metric Cards */}
                  <div className="absolute -top-4 -right-4 glass p-6 rounded-2xl border-neon/30 neon-glow">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Real-time</div>
                    <div className="text-2xl font-bold text-white tracking-tighter">98.4%</div>
                    <div className="text-[10px] uppercase tracking-widest text-neon">Accuracy</div>
                  </div>
                  <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl border-white/10">
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Processing</div>
                    <div className="text-2xl font-bold text-white tracking-tighter">0.4ms</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/20">Latency</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon/5 to-transparent -z-10" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* 3. Popular Health Calculators Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div className="max-w-2xl">
              <div className="text-luxury mb-4">Core Suite</div>
              <h2 className="text-3xl lg:text-5xl mb-6 font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
                Popular <br />
                <span className="text-white/20">Calculators.</span>
              </h2>
              <p className="text-slate-500 uppercase tracking-widest text-xs leading-relaxed">
                Our most utilized computational tools for biometric assessment.
              </p>
            </div>
            <Link to="/calculators" className="group flex items-center gap-4 text-white/40 hover:text-neon transition-colors">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">View All</span>
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-neon transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CALCULATORS.slice(0, 6).map((calc, index) => (
              <div key={calc.id}>
                <CalculatorCard item={calc} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Health Tools Section */}
      <section className="py-32 bg-white/[0.01] border-y border-white/[0.05] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-neon/5 to-transparent blur-[120px] opacity-30 pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div className="max-w-2xl">
              <div className="text-luxury mb-4">Advanced Analysis</div>
              <h2 className="text-3xl lg:text-5xl mb-6 font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
                Interactive <br />
                <span className="text-white/20">Tools.</span>
              </h2>
              <p className="text-slate-500 uppercase tracking-widest text-xs leading-relaxed">
                Sophisticated diagnostic interfaces for deep health insights.
              </p>
            </div>
            <Link to="/tools" className="group flex items-center gap-4 text-white/40 hover:text-neon transition-colors">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Explore Tools</span>
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-neon transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TOOLS.slice(0, 3).map((tool, index) => (
              <div key={tool.id}>
                <CalculatorCard item={tool} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Health Charts Section */}
      <section className="py-32 relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div className="max-w-2xl">
              <div className="text-luxury mb-4">Reference Data</div>
              <h2 className="text-3xl lg:text-5xl mb-6 font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
                Visual <br />
                <span className="text-white/20">Charts.</span>
              </h2>
              <p className="text-slate-500 uppercase tracking-widest text-xs leading-relaxed">
                Standardized reference tables for clinical health metrics.
              </p>
            </div>
            <Link to="/charts" className="group flex items-center gap-4 text-white/40 hover:text-neon transition-colors">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">View Charts</span>
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-neon transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CHARTS.map((chart, index) => (
              <div key={chart.id}>
                <CalculatorCard item={chart} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Health Guides Section (Blog) */}
      <section className="py-32 bg-white/[0.01] border-y border-white/[0.05]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div className="max-w-2xl">
              <div className="text-luxury mb-4">Knowledge Base</div>
              <h2 className="text-3xl lg:text-5xl mb-6 font-display font-bold text-white tracking-tighter uppercase leading-[0.9]">
                Expert <br />
                <span className="text-white/20">Guides.</span>
              </h2>
              <p className="text-slate-500 uppercase tracking-widest text-xs leading-relaxed">
                In-depth articles on nutrition, fitness, and body composition.
              </p>
            </div>
            <Link to="/blog" className="group flex items-center gap-4 text-white/40 hover:text-neon transition-colors">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Read More</span>
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:border-neon transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {BLOG_POSTS.slice(0, 4).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group relative bg-[#0f0f0f] p-12 border border-white/[0.05] rounded-3xl hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className="text-luxury mb-6">{post.category}</div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tighter uppercase group-hover:text-neon transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 mb-10 line-clamp-2 text-sm leading-relaxed uppercase tracking-wider">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/[0.05]">
                    <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">{post.date}</span>
                    <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-neon group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Health Calculators Section (SEO Content Block) */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-luxury mb-8 text-center">About VitalMetrics</div>
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-center tracking-tighter uppercase">The Standard in Health Computation</h2>
          <div className="prose prose-invert max-w-none text-slate-500 leading-relaxed text-center uppercase tracking-widest text-xs">
            <p className="mb-8">
              VitalMetrics is a high-performance computational platform dedicated to biometric analysis. Our algorithms are derived from peer-reviewed clinical studies to provide the most accurate health estimates available online.
            </p>
            <p>
              Whether you are a professional athlete, a healthcare provider, or an individual on a fitness journey, our tools provide the precision data required for informed decision making.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


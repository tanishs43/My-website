import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight, ChevronRight, Activity, BarChart3 } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, TOOLS, CHARTS } from '../constants';

export default function BlogList() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const popularPosts = BLOG_POSTS.slice(0, 4);
  const relatedTools = TOOLS.slice(0, 4);
  const relatedCharts = CHARTS.slice(0, 3);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Page Title & Introduction */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
              Health Guides & <span className="gradient-text">Fitness Articles</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore our health guides to learn about BMI, body fat, weight management, nutrition, and fitness. 
              These guides help you understand important health metrics and make informed lifestyle decisions.
            </p>
          </motion.div>
        </div>

        {/* 2. Featured Guides Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            Featured Health Guides
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group glass rounded-3xl overflow-hidden glass-hover flex flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="text-emerald-400 font-semibold flex items-center gap-2 text-sm">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Health Topics Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Browse Health Topics</h2>
          <div className="flex flex-wrap gap-4">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                className="px-6 py-3 glass rounded-xl text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* 4. All Health Guides Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">All Health Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group glass rounded-3xl overflow-hidden glass-hover flex gap-6 p-4"
              >
                <div className="w-1/3 aspect-square rounded-2xl overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                    Read Guide <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 5. Popular Health Guides Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Top Health Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPosts.map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass p-6 rounded-2xl glass-hover group"
              >
                <div className="text-slate-500 font-display font-bold text-3xl mb-4 group-hover:text-emerald-500/50 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Related Tools Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Useful Health Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((tool) => (
              <Link
                key={tool.id}
                to={tool.path}
                className="flex items-center gap-3 p-4 glass rounded-xl glass-hover group"
              >
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <Activity className="text-emerald-400 w-5 h-5" />
                </div>
                <span className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">{tool.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 7. Related Charts Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Health Reference Charts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCharts.map((chart) => (
              <Link
                key={chart.id}
                to={chart.path}
                className="flex items-center gap-3 p-4 glass rounded-xl glass-hover group"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <BarChart3 className="text-blue-400 w-5 h-5" />
                </div>
                <span className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{chart.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* 8. Search / Filter Section */}
        <section className="mb-20">
          <div className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search health guides..."
                className="w-full bg-slate-800 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 glass rounded-xl text-slate-300 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
                Filter by topic
              </button>
              <button className="flex-1 md:flex-none px-6 py-3 glass rounded-xl text-slate-300 hover:text-white transition-colors">
                Sort by newest
              </button>
            </div>
          </div>
        </section>

        {/* 9. About Health Guides (SEO Content Block) */}
        <section className="pt-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-8">About Our Health Guides</h2>
            <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
              <p>
                Our health guides provide detailed explanations of body metrics such as BMI, body fat percentage, calorie needs, and ideal weight ranges. These tools provide quick insights into your health using scientifically based formulas and reference charts.
              </p>
              <p className="mt-4">
                We believe that understanding your body is the first step towards a healthier lifestyle. Our articles are designed to help readers understand complex health concepts and use our calculators and charts effectively.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


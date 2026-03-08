import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-emerald-400 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Health Guides
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>
            
            <div className="text-slate-400 space-y-6 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Why it matters for your health</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="p-8 glass rounded-2xl border-l-4 border-emerald-500 my-12">
                <p className="text-white italic text-lg">
                  "Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity."
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Practical steps you can take</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <ul className="space-y-4 list-disc pl-6">
                <li>Regular physical activity is key to maintaining a healthy weight.</li>
                <li>Balanced nutrition provides the fuel your body needs.</li>
                <li>Adequate hydration supports all metabolic processes.</li>
                <li>Consistent sleep patterns regulate hormones and recovery.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                <User className="text-slate-400 w-6 h-6" />
              </div>
              <div>
                <span className="text-white font-bold block">VitalMetrics Team</span>
                <span className="text-slate-500 text-sm">Health & Fitness Experts</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-3 glass rounded-xl hover:bg-white/10 transition-colors">
                <Share2 className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

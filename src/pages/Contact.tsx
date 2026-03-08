import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-3xl text-center">
            <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Email Us</h3>
            <p className="text-slate-400 text-sm">support@vitalmetrics.com</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <MessageSquare className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Live Chat</h3>
            <p className="text-slate-400 text-sm">Available Mon-Fri, 9am-5pm</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white font-bold mb-2">Office</h3>
            <p className="text-slate-400 text-sm">123 Health St, Wellness City</p>
          </div>
        </div>

        <div className="glass p-8 lg:p-12 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
              <input type="text" className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

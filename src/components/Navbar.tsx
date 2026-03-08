import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Activity, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CALCULATORS, TOOLS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const navLinks = [
    { 
      name: 'Calculators', 
      path: '/calculators',
      dropdown: CALCULATORS.slice(0, 6).map(c => ({ name: c.title, path: c.path }))
    },
    { 
      name: 'Tools', 
      path: '/tools',
      dropdown: TOOLS.slice(0, 6).map(t => ({ name: t.title, path: t.path }))
    },
    { name: 'Charts', path: '/charts' },
    { name: 'Health Guides', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020203]/80 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-neon transition-colors duration-500">
                <Activity className="text-white group-hover:text-neon w-4 h-4 transition-colors" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tighter uppercase">VitalMetrics</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="text-white/40 hover:text-white py-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown className="w-3 h-3 opacity-20 group-hover:rotate-180 group-hover:text-neon transition-all" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-white/40 hover:text-white py-1 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4"
                    >
                      <div className="bg-[#0f0f0f] border border-white/[0.05] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="p-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsOpen(false);
                              }}
                              className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:bg-white/[0.02] hover:text-neon transition-all rounded-xl"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to={link.path}
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                          className="block px-6 py-4 text-[10px] text-white font-bold uppercase tracking-[0.2em] bg-white/[0.02] border-t border-white/[0.05] hover:text-neon transition-colors"
                        >
                          View All Suite
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
              <button className="text-white/20 hover:text-neon transition-colors p-2">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/40 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-300 hover:text-emerald-400 block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1 mt-1 mb-2">
                      {link.dropdown.map(item => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="text-slate-500 hover:text-emerald-400 block px-3 py-1 rounded-md text-xs font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

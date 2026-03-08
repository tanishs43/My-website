import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6">
            About <span className="gradient-text">VitalMetrics</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            We are dedicated to providing the most accurate and easy-to-use health tools on the web.
          </p>
        </motion.div>

        <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed">
          <p className="mb-6">
            VitalMetrics was founded with a simple goal: to empower individuals with the data they need to take control of their health. Our suite of calculators and tools is built on scientifically validated formulas used by health professionals worldwide.
          </p>
          <p className="mb-6">
            We believe that health metrics should be accessible to everyone. That's why we've designed our platform to be fast, responsive, and completely free to use. Whether you're a professional athlete or just starting your fitness journey, our tools are here to support you.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Mission</h2>
          <p>
            To provide reliable, science-based health information and tools that help people live longer, healthier lives. We strive for accuracy, transparency, and user-centric design in everything we build.
          </p>
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Plasma = lazy(() => import('../Plasma'));
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" >
      {/* Background Effects */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.1),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" /> */}
        

 <div className="absolute inset-0 z-0 bg-bg-dark pointer-events-none">
  <Suspense fallback={<div className="absolute inset-0 bg-brand-primary/5 animate-pulse" />}>
    <Plasma 
      color="#ff6b35"
      speed={1}
      direction="forward"
      scale={2.40}
      opacity={1}
      mouseInteractive={true}
    />
  </Suspense>
      </div>


        {/* Animated Grid */}
        {/* <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px',
               maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
             }} 
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
          <span className="text-xs font-bold tracking-widest uppercase text-white/70">India's First Layer 1 Infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tighter"
        >
          Build the <span className="text-gradient">Future</span> <br />
          of Web3
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          MST Blockchain provides the most scalable, secure, and developer-friendly 
          infrastructure for the next generation of decentralized applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-white text-bg-dark font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded-full transition-all backdrop-blur-sm">
            Explore Ecosystem
          </button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5"
        >
          {[
            { label: 'Transactions', value: '10M+', icon: <Zap className="w-4 h-4 text-brand-primary" /> },
            { label: 'Security', value: '99.9%', icon: <Shield className="w-4 h-4 text-brand-secondary" /> },
            { label: 'Nodes', value: '500+', icon: <Globe className="w-4 h-4 text-brand-accent" /> },
            { label: 'Latency', value: '< 1s', icon: <Zap className="w-4 h-4 text-brand-primary" /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                {stat.icon}
                {stat.label}
              </div>
              <div className="text-2xl font-display font-bold">{stat.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}

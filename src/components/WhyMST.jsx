import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Check, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function WhyMST() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    { label: 'Transactions/Sec', value: 100000, suffix: '+' },
    { label: 'Average Fee', value: 0.001, prefix: '$', decimals: 3 },
    { label: 'Active Nodes', value: 500, suffix: '+' },
    { label: 'Uptime', value: 99.9, suffix: '%' },
  ];

  const benefits = [
    { title: 'Low Fees', description: 'Ultra-low transaction costs for mass adoption.', icon: <TrendingUp className="w-5 h-5" /> },
    { title: 'High Scalability', description: 'Optimized for high-throughput applications.', icon: <Zap className="w-5 h-5" /> },
    { title: 'Energy Efficient', description: 'Eco-friendly Proof-of-Stake consensus.', icon: <Globe className="w-5 h-5" /> },
    { title: 'Real-world Adoption', description: 'Built for practical utility and enterprise.', icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <section id="why-mst" ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Why <span className="text-gradient">MST Blockchain?</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              We've built MST to solve the core challenges of blockchain technology: 
              scalability, cost, and accessibility. Our infrastructure is designed 
              to power the next billion users of Web3.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{benefit.title}</h4>
                    <p className="text-xs text-white/40">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center flex flex-col items-center justify-center glow-shadow"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold mb-2 text-gradient">
                    {stat.prefix}<Counter value={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Comparison Table Feel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 p-8 rounded-3xl bg-glass border border-white/10"
            >
              <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-brand-primary" />
                MST vs Traditional Layer 1s
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Scalability', mst: '100k+ TPS', others: '15-2k TPS' },
                  { label: 'Transaction Cost', mst: '< $0.001', others: '$0.1 - $50' },
                  { label: 'Finality', mst: '< 1s', others: '10s - 10m' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-white/40">{row.label}</span>
                    <div className="flex gap-4 text-sm font-bold">
                      <span className="text-brand-primary">{row.mst}</span>
                      <span className="text-white/20 line-through">{row.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

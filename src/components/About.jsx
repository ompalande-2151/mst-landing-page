import { motion } from 'motion/react';
import { Shield, Zap, Globe, Lock, Cpu, Database } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: 'Secure',
      description: 'Advanced cryptographic security protocols ensuring your assets and data are always protected.',
      icon: <Shield className="w-8 h-8 text-brand-primary" />,
      color: 'from-brand-primary/20 to-transparent'
    },
    {
      title: 'Scalable',
      description: 'High-throughput architecture designed to handle millions of transactions per second seamlessly.',
      icon: <Zap className="w-8 h-8 text-brand-secondary" />,
      color: 'from-brand-secondary/20 to-transparent'
    },
    {
      title: 'Decentralized',
      description: 'A truly distributed network with nodes across the globe, ensuring maximum resilience.',
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      color: 'from-brand-accent/20 to-transparent'
    },
    {
      title: 'Accessible',
      description: 'Developer-friendly tools and APIs that make building on blockchain easier than ever.',
      icon: <Cpu className="w-8 h-8 text-brand-primary" />,
      color: 'from-brand-primary/20 to-transparent'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              What is <span className="text-gradient">MST Blockchain?</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Blockchain is a shared, immutable ledger that facilitates the process 
              of recording transactions and tracking assets in a business network. 
              MST Blockchain is India's first Layer 1 infrastructure, specifically 
              optimized for high performance and real-world utility.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Trustless Transactions</h4>
                  <p className="text-sm text-white/40">No intermediaries needed for secure value exchange.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">Immutable Data</h4>
                  <p className="text-sm text-white/40">Once recorded, data cannot be altered or deleted.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-linear-to-br from-brand-primary/10 to-brand-secondary/10 border border-white/10 flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://media.licdn.com/dms/image/v2/D5612AQHt39uCmU7uVA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732252883979?e=2147483647&v=beta&t=CYY1nUP1HQwylIrRWVKqSfRRTluzQW81s59mKxKnb5w')] opacity-10 mix-blend-overlay" />
              <div className="relative w-full h-full border-2 border-dashed rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-2 border-dashed  rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-12 h-12 bg-brand-primary rounded-xl blur-xl animate-pulse" />
              </div>
              <div className="absolute text-6xl font-display font-bold tracking-tighter opacity-20">MST</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-linear-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

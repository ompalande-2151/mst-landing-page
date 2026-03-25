import { motion } from 'motion/react';
import { Network, FileCode, Wrench, Wallet, Bot, ArrowRight } from 'lucide-react';

export default function Ecosystem() {
  const items = [
    {
      title: 'Blockchain Network',
      description: 'The core Layer 1 infrastructure providing the base layer for all decentralized applications.',
      icon: <Network className="w-8 h-8 text-brand-primary" />,
      color: 'from-brand-primary/20 to-transparent'
    },
    {
      title: 'Smart Contracts',
      description: 'Advanced, secure smart contract execution environment with support for multiple languages.',
      icon: <FileCode className="w-8 h-8 text-brand-secondary" />,
      color: 'from-brand-secondary/20 to-transparent'
    },
    {
      title: 'Developer Tools',
      description: 'Comprehensive SDKs, APIs, and documentation to accelerate your development process.',
      icon: <Wrench className="w-8 h-8 text-brand-accent" />,
      color: 'from-brand-accent/20 to-transparent'
    },
    {
      title: 'Wallet Access',
      description: 'Seamless integration with popular Web3 wallets for a smooth user onboarding experience.',
      icon: <Wallet className="w-8 h-8 text-brand-primary" />,
      color: 'from-brand-primary/20 to-transparent'
    },
    {
      title: 'AI Assistant',
      description: 'Intelligent AI-powered developer assistant to help you write and audit smart contracts.',
      icon: <Bot className="w-8 h-8 text-brand-secondary" />,
      color: 'from-brand-secondary/20 to-transparent'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            The MST <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Everything you need to build, deploy, and scale your decentralized 
            future on India's most advanced blockchain infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="flex items-center gap-2 text-brand-primary text-sm font-bold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Join Ecosystem Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-3xl bg-linear-to-br from-brand-primary to-brand-secondary border border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer glow-shadow"
          >
            <h3 className="text-3xl font-display font-bold mb-4">Join the Ecosystem</h3>
            <p className="text-white/80 text-sm mb-8">Be part of the next big thing in Web3.</p>
            <button className="px-8 py-3 bg-white text-bg-dark font-bold rounded-full group-hover:scale-105 transition-transform">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

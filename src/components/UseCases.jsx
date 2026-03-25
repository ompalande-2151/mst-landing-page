import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Landmark, Truck, GraduationCap, Fingerprint, ArrowRight } from 'lucide-react';

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      title: 'Finance',
      description: 'Revolutionizing the financial sector with decentralized banking, lending, and global payments.',
      icon: <Landmark className="w-8 h-8" />,
      color: 'from-brand-primary to-brand-secondary',
      features: ['DeFi Protocols', 'Cross-border Payments', 'Asset Tokenization']
    },
    {
      title: 'Supply Chain',
      description: 'Real-time tracking and verification of goods from origin to destination with full transparency.',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-brand-secondary to-brand-accent',
      features: ['Provenance Tracking', 'Inventory Management', 'Logistics Optimization']
    },
    {
      title: 'Education',
      description: 'Secure, verifiable digital credentials and decentralized learning platforms for the future.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-brand-accent to-brand-primary',
      features: ['Digital Diplomas', 'Learning Records', 'Skill Verification']
    },
    {
      title: 'Identity',
      description: 'Self-sovereign identity solutions that give users full control over their personal data.',
      icon: <Fingerprint className="w-8 h-8" />,
      color: 'from-brand-primary to-brand-accent',
      features: ['DID Standards', 'Privacy Controls', 'Secure Authentication']
    }
  ];

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-white/2">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Real-world <span className="text-gradient">Use Cases</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            MST Blockchain is designed to solve real-world problems across 
            diverse industries with high performance and security.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((useCase, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                activeTab === i 
                ? 'bg-linear-to-r from-brand-primary to-brand-secondary text-white glow-shadow' 
                : 'bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10'
              }`}
            >
              {useCase.icon}
              {useCase.title}
            </button>
          ))}
        </div>

        <div className="relative min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="p-12 rounded-3xl bg-glass border border-white/10 relative overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-br ${cases[activeTab].color} opacity-5`} />
                <div className="relative z-10">
                  <div className={`mb-8 p-4 rounded-2xl bg-linear-to-br ${cases[activeTab].color} w-fit text-white glow-shadow`}>
                    {cases[activeTab].icon}
                  </div>
                  <h3 className="text-4xl font-display font-bold mb-6">{cases[activeTab].title}</h3>
                  <p className="text-lg text-white/60 mb-8 leading-relaxed">
                    {cases[activeTab].description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {cases[activeTab].features.map((feature, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-brand-primary">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                <img 
                  src={`https://picsum.photos/seed/${cases[activeTab].title.toLowerCase()}/800/600`} 
                  alt={cases[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
                    Explore Solutions <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

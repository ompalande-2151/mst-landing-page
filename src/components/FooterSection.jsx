import { motion } from 'motion/react';
import { Mail, Send, Github, Twitter, Linkedin, ArrowRight, Instagram, Youtube } from 'lucide-react';

export default function FooterSection() {
  return (
    <div className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-24 rounded-[40px] bg-linear-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 border border-white/10 relative overflow-hidden text-center glow-shadow"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/future/1920/1080')] opacity-10 mix-blend-overlay" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight tracking-tighter">
                Start your <span className="text-gradient">Web3 journey</span> <br />
                with MST Blockchain
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
                Join thousands of developers and businesses building the next 
                generation of decentralized applications.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-12 py-5 bg-white text-bg-dark font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 group">
                  Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded-full transition-all backdrop-blur-md">
                  Join Community
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Get in <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-lg text-white/60 mb-12 leading-relaxed">
                Have questions or need support? Our team is here to help you 
                navigate the world of Web3 and MST Blockchain.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-sm text-white/40">support@mstblockchain.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Telegram</h4>
                    <p className="text-sm text-white/40">t.me/mstblockchain_official</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-glass border border-white/10"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-5 bg-linear-to-r from-brand-primary to-brand-secondary rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform glow-shadow">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-white/5 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-linear-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-display font-bold tracking-tighter">MST <span className="text-brand-primary">BLOCKCHAIN</span></span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                India's first Layer 1 blockchain infrastructure, providing 
                unparalleled scalability and security for the future of Web3.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/mstblockchain/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/mst-chain" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/mstblockchain/" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@MST_Blockchain" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary/20 hover:text-brand-primary transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Ecosystem</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Smart Contracts</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Developer Tools</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Wallet</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/20 font-bold uppercase tracking-widest">
            <div>© 2026 MST Blockchain. All rights reserved.</div>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

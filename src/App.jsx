/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { useState, useEffect, useMemo, lazy, Suspense } from 'react';

// Lazy load key components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Ecosystem = lazy(() => import('./components/Ecosystem'));
const WhyMST = lazy(() => import('./components/WhyMST'));
const UseCases = lazy(() => import('./components/UseCases'));
const FooterSection = lazy(() => import('./components/FooterSection'));

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-90 h-90 bg-brand-primary opacity-40 rounded-full blur-[120px] pointer-events-none z-0 hidden lg:block"
      animate={{
        x: mousePos.x - 300,
        y: mousePos.y - 300,
      }}
      transition={{ type: 'spring', damping: 50, stiffness: 200, mass: 0.5 }}
    />
  );
};


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg-dark text-white overflow-x-hidden selection:bg-brand-primary/30">
      <CursorGlow />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-primary via-brand-secondary to-brand-accent z-100 origin-left"
        style={{ scaleX }}
      />

      <Suspense fallback={<div className="h-screen flex items-center justify-center bg-bg-dark text-brand-primary">Loading navigation...</div>}>
        <Navbar />
      </Suspense>
      
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-bg-dark text-brand-primary">Loading content...</div>}>
          <Hero />
          <About />
          <Ecosystem />
          <WhyMST />
          <UseCases />
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}

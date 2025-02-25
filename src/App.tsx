import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Target, BookCheck, UserCheck, Layout, Settings, Zap, Award } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import ErrorBoundary from './components/ErrorBoundary';
import { Navbar } from './components/Navigation/Navbar';
import { Hero } from './components/Hero/Hero';
import { FeatureCard } from './components/Features/FeatureCard';
import { StatCard } from './components/Features/StatCard';
import { FeatureListItem } from './components/Features/FeatureListItem';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Create animated background dots
    const createDots = () => {
      const dotsContainer = document.querySelector('.animated-dots');
      if (!dotsContainer) return;

      // Clear existing dots
      dotsContainer.innerHTML = '';

      // Create new dots
      for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        dot.style.animation = `float ${3 + Math.random() * 7}s ease-in-out infinite`;
        dot.style.animationDelay = `${Math.random() * 5}s`;
        dotsContainer.appendChild(dot);
      }
    };

    createDots();
    window.addEventListener('resize', createDots);
    return () => window.removeEventListener('resize', createDots);
  }, []);

  return (
    <ErrorBoundary>
      <div className={`min-h-screen relative animated-bg ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <div className="animated-dots" />
        <div className="relative z-10">
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
            <Hero />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              <FeatureCard
                icon={<Brain className="w-8 h-8 text-indigo-500" />}
                title="AI-Powered Assessment"
                description="Auto-grade exams and provide instant feedback with advanced AI"
                delay={0.1}
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-purple-500" />}
                title="Secure Proctoring"
                description="Advanced AI proctoring with face detection and screen monitoring"
                delay={0.2}
              />
              <FeatureCard
                icon={<Target className="w-8 h-8 text-pink-500" />}
                title="Adaptive Testing"
                description="Dynamic question selection based on student performance"
                delay={0.3}
              />
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <StatCard number="1M+" label="Students" delay={0.1} />
              <StatCard number="5K+" label="Institutions" delay={0.2} />
              <StatCard number="10M+" label="Exams" delay={0.3} />
              <StatCard number="99.9%" label="Uptime" delay={0.4} />
            </div>

            <div className="mt-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12"
              >
                Complete Exam Management Solution
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureListItem
                  icon={<BookCheck className="w-6 h-6 text-indigo-500" />}
                  title="Question Bank"
                  description="Create and manage question banks with version control"
                  delay={0.1}
                />
                <FeatureListItem
                  icon={<UserCheck className="w-6 h-6 text-indigo-500" />}
                  title="Identity Verification"
                  description="Secure authentication with facial recognition"
                  delay={0.2}
                />
                <FeatureListItem
                  icon={<Layout className="w-6 h-6 text-indigo-500" />}
                  title="Custom Workflows"
                  description="Design your own exam creation and review process"
                  delay={0.3}
                />
                <FeatureListItem
                  icon={<Settings className="w-6 h-6 text-indigo-500" />}
                  title="Flexible Configuration"
                  description="Customize every aspect of the exam experience"
                  delay={0.4}
                />
                <FeatureListItem
                  icon={<Zap className="w-6 h-6 text-indigo-500" />}
                  title="Real-time Analytics"
                  description="Monitor performance and identify trends instantly"
                  delay={0.5}
                />
                <FeatureListItem
                  icon={<Award className="w-6 h-6 text-indigo-500" />}
                  title="Digital Certificates"
                  description="Issue tamper-proof certificates with blockchain"
                  delay={0.6}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
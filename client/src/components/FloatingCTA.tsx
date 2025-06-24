import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentSection, setCurrentSection] = useState('default');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsVisible(scrollY > windowHeight * 0.2);
      setIsCollapsed(window.innerWidth < 768);
      
      // Determine current section
      const sections = document.querySelectorAll('section[id]');
      let current = 'default';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getCTAContent = () => {
    switch (currentSection) {
      case 'services':
        return { text: 'Book Consultation', icon: <MessageCircle className="w-4 h-4" /> };
      case 'case-studies':
        return { text: 'See More Results', icon: <ArrowRight className="w-4 h-4" /> };
      default:
        return { text: 'Start Your Project', icon: <MessageCircle className="w-4 h-4" /> };
    }
  };

  const ctaContent = getCTAContent();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className={`
              group relative overflow-hidden rounded-full shadow-lg
              ${isCollapsed ? 'w-14 h-14' : 'px-6 py-3 pr-4'}
              bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
              text-white font-medium transition-all duration-300
              flex items-center gap-2
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ rotate: 5 }}
            >
              {ctaContent.icon}
            </motion.div>
            
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  {ctaContent.text}
                </motion.span>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

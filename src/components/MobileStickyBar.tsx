import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DETAILS } from '../constants';

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past hero (approx 450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-4 inset-x-4 z-40 md:hidden pointer-events-none"
        >
          <div className="bg-[#121A24]/95 backdrop-blur-md border border-[#F7F3EC]/15 p-2 rounded-full shadow-2xl pointer-events-auto flex items-center justify-between gap-3">
            <span className="text-xs text-[#F7F3EC]/70 pl-4 font-medium truncate">
              {DETAILS.businessName}
            </span>
            <a
              href={DETAILS.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F6B6B] text-[#F7F3EC] px-5 py-2.5 rounded-full text-xs font-semibold tracking-tight shrink-0 shadow-sm hover:bg-[#147e7e] transition-colors active:scale-95"
            >
              Book a 20 minute call
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

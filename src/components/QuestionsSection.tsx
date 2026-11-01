import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Who is Slow Page Report for?',
    a: `For ${DETAILS.targetAudience.toLowerCase()} in ${DETAILS.city} and beyond.`,
  },
  {
    q: 'What exactly do you set up?',
    a: DETAILS.whatISetUp,
  },
  {
    q: 'How long does setup take?',
    a: 'It is agreed on the call.',
  },
  {
    q: 'What does it cost?',
    a: DETAILS.price,
  },
  {
    q: 'How do we start?',
    a: 'Book a 20 minute call to talk through your website and agree on a plan.',
  },
];

export const QuestionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative w-full bg-[#F7F3EC] text-[#121A24] py-24 sm:py-36 px-6 sm:px-8 border-t border-[#121A24]/10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0F6B6B] mb-3">
            Questions
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121A24] tracking-tight">
            Frequently answered questions
          </h2>
        </div>

        <div className="border-t border-[#121A24]/12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border-b border-[#121A24]/12">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-7 flex items-center justify-between text-left gap-6 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-2xl sm:text-[28px] text-[#121A24] leading-snug group-hover:text-[#0F6B6B] transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#121A24]/15 flex items-center justify-center shrink-0 group-hover:border-[#0F6B6B] transition-colors">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: 0.25, ease: 'easeInOut' }
                      }
                      className="text-xl leading-none text-[#121A24] select-none block origin-center"
                    >
                      +
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, height: 'auto' }
                          : { opacity: 0, height: 0 }
                      }
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0, height: 0 }
                          : { opacity: 0, height: 0 }
                      }
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-base sm:text-lg text-[#121A24]/80 leading-relaxed max-w-[65ch]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

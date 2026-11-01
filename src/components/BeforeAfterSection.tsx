import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';

const withoutLines = [
  'Waiting for messages from users saying page responses feel slow.',
  'Wondering if the latest release changed how pages respond.',
  'Asking your team where page slowdowns came from after the fact.',
  'Spending your evening checking pages by hand to see what broke.',
];

const withLines = [
  'Checking plain tools that show slow pages early.',
  'Knowing your release checks ran before users opened the page.',
  'Seeing tool changes using the teams you already know.',
  'Closing your laptop knowing your page responses are watched.',
];

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-[#F7F3EC] text-[#121A24] py-24 sm:py-32 px-6 sm:px-8 border-t border-[#121A24]/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0F6B6B] mb-3">
            Day In The Life
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121A24] tracking-tight">
            How your evening looks
          </h2>
        </div>

        {/* Two-position switch */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#121A24]/5 border border-[#121A24]/10">
            <button
              type="button"
              onClick={() => setActiveTab('without')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'without'
                  ? 'text-[#F7F3EC]'
                  : 'text-[#121A24]/70 hover:text-[#121A24]'
              }`}
            >
              {activeTab === 'without' && (
                <motion.div
                  layoutId="switch-bg"
                  className="absolute inset-0 bg-[#121A24] rounded-full shadow-xs"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 350, damping: 30 }
                  }
                />
              )}
              <span className="relative z-10">Without {DETAILS.businessName}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('with')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'with'
                  ? 'text-[#F7F3EC]'
                  : 'text-[#121A24]/70 hover:text-[#121A24]'
              }`}
            >
              {activeTab === 'with' && (
                <motion.div
                  layoutId="switch-bg"
                  className="absolute inset-0 bg-[#0F6B6B] rounded-full shadow-xs"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 350, damping: 30 }
                  }
                />
              )}
              <span className="relative z-10">With {DETAILS.businessName}</span>
            </button>
          </div>
        </div>

        {/* Stacked lists with crossfade: both sit in the same grid area */}
        <div className="relative min-h-[280px] grid grid-cols-1">
          {/* Without List */}
          <div
            className={`col-start-1 row-start-1 transition-opacity duration-300 ${
              activeTab === 'without'
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="bg-[#121A24]/[0.03] border border-[#121A24]/12 rounded-[28px] p-8 sm:p-10 shadow-xs">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#5A6B7B] mb-6">
                Your evening without plain performance tools
              </p>
              <ul className="space-y-5">
                {withoutLines.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#5A6B7B] mt-2 shrink-0" />
                    <span className="text-base sm:text-lg text-[#121A24]/85 leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With List */}
          <div
            className={`col-start-1 row-start-1 transition-opacity duration-300 ${
              activeTab === 'with'
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="bg-[#0F6B6B]/[0.06] border border-[#0F6B6B]/25 rounded-[28px] p-8 sm:p-10 shadow-xs">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#0F6B6B] mb-6">
                Your evening with {DETAILS.businessName}
              </p>
              <ul className="space-y-5">
                {withLines.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#0F6B6B] mt-2 shrink-0" />
                    <span className="text-base sm:text-lg text-[#121A24] font-medium leading-relaxed">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

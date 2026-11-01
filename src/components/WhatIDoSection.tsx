import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import { ImagePanel } from './ImagePanel';

interface WorkCard {
  number: string;
  title: string;
  image: string;
  today: string;
  withService: string;
}

const cards: WorkCard[] = [
  {
    number: '01',
    title: 'Slow pages',
    image: '/work-1.jpg',
    today: 'Your website responds slowly and you only discover it after users give up and leave.',
    withService: 'Small, plain tools show your team slow pages early so you can fix them.',
  },
  {
    number: '02',
    title: 'Release checks',
    image: '/work-2.jpg',
    today: 'Releases go out without checks on how page response times change.',
    withService: 'Plain release checks show your team how pages respond before releases reach users.',
  },
  {
    number: '03',
    title: 'Tool changes',
    image: '/work-3.jpg',
    today: 'Tool changes happen across teams without showing their effect on your page speed.',
    withService: 'Early checks show tool changes and page response differences using the teams you already know.',
  },
];

export const WhatIDoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Laptop/desktop horizontal slide
  // 3 cards of ~70vw each -> translate from 0% to approximately -56%
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-56%']);

  return (
    <section id="what-i-do" className="relative w-full bg-[#F7F3EC] text-[#121A24]">
      {/* Laptop / Desktop pinned container (hidden on mobile, or when reduced motion is on) */}
      <div
        ref={containerRef}
        className={`hidden md:block relative ${
          shouldReduceMotion ? 'h-auto py-28' : 'h-[300vh]'
        }`}
      >
        <div
          className={`${
            shouldReduceMotion
              ? 'relative'
              : 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden'
          }`}
        >
          <div className="max-w-6xl mx-auto px-8 w-full mb-8">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0F6B6B] mb-2">
              What I Do
            </p>
            <h2 className="font-serif text-5xl lg:text-6xl text-[#121A24] tracking-tight">
              What I set up for your website
            </h2>
          </div>

          {shouldReduceMotion ? (
            /* Reduced motion view: clean stacked cards */
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((card) => (
                <div
                  key={card.number}
                  className="bg-[#F7F3EC] border border-[#121A24]/12 rounded-[28px] overflow-hidden flex flex-col shadow-xs"
                >
                  <div className="h-60 w-full overflow-hidden bg-[#121A24]">
                    <ImagePanel
                      src={card.image}
                      alt={card.title}
                      fallbackLabel={card.number}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif text-3xl text-[#0F6B6B]">
                          {card.number}
                        </span>
                        <h3 className="font-serif text-2xl text-[#121A24]">
                          {card.title}
                        </h3>
                      </div>
                      <div className="space-y-3 text-sm text-[#121A24]/80 leading-relaxed mt-4">
                        <p>
                          <strong className="text-[#121A24] font-semibold">Today:</strong>{' '}
                          {card.today}
                        </p>
                        <p>
                          <strong className="text-[#0F6B6B] font-semibold">
                            With {DETAILS.businessName}:
                          </strong>{' '}
                          {card.withService}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Smooth pinned sideways scroll */
            <div className="w-full pl-8 md:pl-[calc((100vw-72rem)/2+2rem)]">
              <motion.div style={{ x }} className="flex gap-8 w-max pr-16">
                {cards.map((card) => (
                  <div
                    key={card.number}
                    className="w-[70vw] max-w-[760px] h-[540px] bg-[#F7F3EC] border border-[#121A24]/12 rounded-[28px] overflow-hidden flex flex-col shadow-sm"
                  >
                    {/* Work picture filling top 60% */}
                    <div className="h-[60%] w-full overflow-hidden bg-[#121A24]">
                      <ImagePanel
                        src={card.image}
                        alt={card.title}
                        fallbackLabel={card.number}
                        className="w-full h-full"
                      />
                    </div>
                    {/* Content bottom 40% */}
                    <div className="h-[40%] p-6 lg:p-8 flex flex-col justify-between">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="font-serif text-3xl text-[#0F6B6B]">
                          {card.number}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[#121A24]">
                          {card.title}
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-[15px] leading-relaxed">
                        <p className="text-[#121A24]/75">
                          <strong className="text-[#121A24] font-semibold">Today:</strong>{' '}
                          {card.today}
                        </p>
                        <p className="text-[#121A24]/90">
                          <strong className="text-[#0F6B6B] font-semibold">
                            With {DETAILS.businessName}:
                          </strong>{' '}
                          {card.withService}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Phone layout: stacked and swipeable sideways */}
      <div className="md:hidden py-16 px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0F6B6B] mb-2">
          What I Do
        </p>
        <h2 className="font-serif text-4xl text-[#121A24] tracking-tight mb-8">
          What I set up for your website
        </h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-6 px-6 scrollbar-none">
          {cards.map((card) => (
            <div
              key={card.number}
              className="snap-center shrink-0 w-[85vw] max-w-[340px] bg-[#F7F3EC] border border-[#121A24]/12 rounded-[28px] overflow-hidden flex flex-col shadow-sm"
            >
              <div className="h-48 w-full overflow-hidden bg-[#121A24]">
                <ImagePanel
                  src={card.image}
                  alt={card.title}
                  fallbackLabel={card.number}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif text-2xl text-[#0F6B6B]">
                    {card.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#121A24]">
                    {card.title}
                  </h3>
                </div>
                <div className="space-y-2.5 text-xs text-[#121A24]/80 leading-relaxed">
                  <p>
                    <strong className="text-[#121A24] font-semibold">Today:</strong>{' '}
                    {card.today}
                  </p>
                  <p>
                    <strong className="text-[#0F6B6B] font-semibold">
                      With {DETAILS.businessName}:
                    </strong>{' '}
                    {card.withService}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

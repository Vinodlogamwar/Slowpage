import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import { MagneticButton } from './MagneticButton';

interface Step {
  num: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'A 20 minute call',
    description:
      'We talk through your website and where slow pages hurt your response times.',
  },
  {
    num: '02',
    title: 'A plan for your website',
    description:
      'We agree on the small, plain tools your team needs to catch slow page responses early.',
  },
  {
    num: '03',
    title: 'I set it up and show your team',
    description:
      'I set up the tools and show your team how to read slow page reports using the teams you already know.',
  },
];

export const HowWeStartSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EC] text-[#121A24] py-24 sm:py-36 px-6 sm:px-8 border-t border-[#121A24]/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0F6B6B] mb-3">
            How We Start
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#121A24] tracking-tight">
            Three steps to see slow pages early
          </h2>
        </div>

        {/* Steps with vertical timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Background vertical line */}
          <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-8 w-[2px] bg-[#121A24]/15" />

          {/* Accent filling vertical line */}
          <motion.div
            style={
              shouldReduceMotion
                ? { height: '100%' }
                : { height: lineHeight }
            }
            className="absolute left-2.5 sm:left-3.5 top-3 w-[2px] bg-[#0F6B6B] origin-top"
          />

          <div className="space-y-16">
            {steps.map((step) => (
              <div key={step.num} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                {/* Number node marker */}
                <div className="absolute -left-8 sm:-left-12 top-0.5 w-6 h-6 rounded-full bg-[#F7F3EC] border-2 border-[#0F6B6B] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0F6B6B]" />
                </div>

                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-serif text-2xl text-[#0F6B6B] font-semibold">
                      {step.num}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#121A24]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-[#121A24]/80 leading-relaxed max-w-[56ch]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price line sits strictly under step 3, exactly as written */}
          <div className="mt-16 pt-8 border-t border-[#121A24]/10">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#5A6B7B] mb-2">
              Price
            </p>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-6">
              <p className="font-serif text-3xl sm:text-4xl text-[#121A24]">
                {DETAILS.price}
              </p>
              <MagneticButton
                href={DETAILS.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="px-6 py-3.5 text-sm font-semibold tracking-tight"
              >
                Book a 20 minute call
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

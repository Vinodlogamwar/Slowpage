import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { DETAILS } from '../constants';
import { ImagePanel } from './ImagePanel';
import { MagneticButton } from './MagneticButton';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Gentle parallax: arch moves slightly slower than the page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const archY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Words */}
        <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
          {/* Target line */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#5A6B7B] mb-6"
          >
            For {DETAILS.targetAudience} in {DETAILS.city}
          </motion.p>

          {/* Promise Headline with italic accent word */}
          <div className="overflow-hidden mb-6 w-full">
            <motion.h1
              initial={shouldReduceMotion ? {} : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.0] tracking-[-0.02em] text-[#121A24]"
            >
              See the slow page{' '}
              <span className="italic text-[#0F6B6B] font-serif pr-1">before</span>{' '}
              your users do.
            </motion.h1>
          </div>

          {/* Plain setup sentence */}
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="text-lg md:text-xl text-[#121A24]/80 leading-[1.6] max-w-[64ch] mb-10"
          >
            I build and sell small, plain tools that show a team its slow pages, its release checks and its tool changes early, using the teams you already know.
          </motion.p>

          {/* CTAs: Main Booking button & WhatsApp */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              href={DETAILS.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="px-8 py-4 text-base font-semibold tracking-tight shadow-md"
            >
              Book a 20 minute call
            </MagneticButton>

            <MagneticButton
              href={DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="px-6 py-4 text-base font-medium tracking-tight"
            >
              Message me on WhatsApp
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: Arch Frame */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            style={{ y: archY }}
            initial={
              shouldReduceMotion
                ? {}
                : { clipPath: 'inset(100% 0% 0% 0% round 140px 140px 0 0)', opacity: 0 }
            }
            animate={{
              clipPath: 'inset(0% 0% 0% 0% round 140px 140px 0 0)',
              opacity: 1,
            }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] pt-2"
          >
            {/* Arch frame container: rounded top, square bottom */}
            <div className="w-full h-full rounded-t-[140px] rounded-b-none overflow-hidden shadow-2xl border border-[#121A24]/10 bg-[#121A24]">
              <ImagePanel
                src="/me.jpg"
                alt={DETAILS.name}
                fallbackLabel="VKL"
                roundedTopOnly={true}
                className="w-full h-full"
              />
            </div>

            {/* Floating corner card */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 bg-[#F7F3EC] border border-[#121A24]/12 py-3 px-4 rounded-xl shadow-lg max-w-[240px]"
            >
              <p className="text-xs font-semibold text-[#121A24] leading-tight">
                {DETAILS.name}
              </p>
              <p className="text-[11px] text-[#5A6B7B] mt-0.5 leading-snug">
                founder of {DETAILS.businessName}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

const sentenceText =
  'Your team ships an update, page responses slow down, and you only find out when users leave or write in to complain about slow pages.';

const words = sentenceText.split(' ');

interface WordProps {
  word: string;
  range: [number, number];
  progress: any;
  reducedMotion: boolean | null;
}

const Word: React.FC<WordProps> = ({ word, range, progress, reducedMotion }) => {
  const opacity = useTransform(progress, range, [0.25, 1.0]);
  const color = useTransform(
    progress,
    range,
    ['#5A6B7B', '#F7F3EC']
  );

  if (reducedMotion) {
    return <span className="text-[#F7F3EC] mr-[0.3em] inline-block">{word}</span>;
  }

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.3em] inline-block transition-colors duration-75"
    >
      {word}
    </motion.span>
  );
};

export const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 40%'],
  });

  return (
    <section
      ref={containerRef}
      data-theme="ink"
      className="relative w-full bg-[#121A24] text-[#F7F3EC] py-24 sm:py-32 md:py-44 px-6 sm:px-8 film-grain"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0F6B6B] mb-8">
          The Problem
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.18] tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
                reducedMotion={shouldReduceMotion}
              />
            );
          })}
        </h2>
      </div>
    </section>
  );
};

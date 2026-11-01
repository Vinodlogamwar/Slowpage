import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'accent' | 'outline' | 'pill';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  target,
  rel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Mild magnetic pull up to 8px
    const deltaX = (clientX - centerX) * 0.18;
    const deltaY = (clientY - centerY) * 0.18;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors cursor-pointer select-none';

  let variantStyles = '';
  if (variant === 'primary') {
    variantStyles =
      'bg-[#121A24] text-[#F7F3EC] hover:bg-[#0F6B6B] border border-transparent shadow-sm';
  } else if (variant === 'accent') {
    variantStyles =
      'bg-[#0F6B6B] text-[#F7F3EC] hover:bg-[#137d7d] border border-transparent shadow-sm';
  } else if (variant === 'outline') {
    variantStyles =
      'bg-transparent text-[#121A24] border border-[#121A24]/20 hover:border-[#121A24]';
  } else if (variant === 'pill') {
    variantStyles =
      'bg-[#121A24] text-[#F7F3EC] hover:bg-[#0F6B6B] border border-transparent text-sm';
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={reducedMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.2 }}
      whileTap={reducedMotion ? {} : { scale: 0.96 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
};

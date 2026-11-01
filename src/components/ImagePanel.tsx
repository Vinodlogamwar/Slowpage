import React, { useState } from 'react';

interface ImagePanelProps {
  src: string;
  alt: string;
  fallbackLabel: string; // 'VKL' for me.jpg, '01', '02', '03' for work pictures
  className?: string;
  roundedTopOnly?: boolean;
}

export const ImagePanel: React.FC<ImagePanelProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  roundedTopOnly = false,
}) => {
  const [loadError, setLoadError] = useState(false);

  // If the image fails to load or does not exist, show the rich handcrafted panel
  if (loadError) {
    return (
      <div
        className={`relative overflow-hidden w-full h-full bg-gradient-to-br from-[#121A24] via-[#152330] to-[#0F6B6B] flex items-center justify-center film-grain ${
          roundedTopOnly ? 'rounded-t-[140px] rounded-b-none' : 'rounded-[28px]'
        } ${className}`}
      >
        {/* Subtle geometric framing */}
        <div className="absolute inset-4 border border-[#F7F3EC]/10 rounded-inherit pointer-events-none" />
        
        {/* Huge outline serif text for initials or card number */}
        <span
          className="text-outline-cream select-none text-8xl md:text-9xl font-serif tracking-tight font-normal opacity-85 z-10"
          aria-hidden="true"
        >
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden w-full h-full bg-[#121A24] ${
        roundedTopOnly ? 'rounded-t-[140px] rounded-b-none' : 'rounded-[28px]'
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setLoadError(true)}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

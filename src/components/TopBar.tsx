import React, { useEffect, useState } from 'react';
import { DETAILS } from '../constants';

export const TopBar: React.FC = () => {
  const [navState, setNavState] = useState<'transparent' | 'cream' | 'ink'>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Find all elements marked with data-theme="ink"
      const inkSections = document.querySelectorAll('[data-theme="ink"]');
      let overInk = false;
      const navHeight = 72;

      inkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Check if top of viewport (where nav sits: 0 to navHeight) overlaps with this ink section
        if (rect.top <= navHeight && rect.bottom >= 0) {
          overInk = true;
        }
      });

      if (overInk) {
        setNavState('ink');
      } else if (scrollY > 50) {
        setNavState('cream');
      } else {
        setNavState('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = {
    transparent: 'bg-transparent text-[#121A24] border-transparent',
    cream: 'bg-[#F7F3EC] text-[#121A24] border-b border-[#121A24]/12',
    ink: 'bg-[#121A24] text-[#F7F3EC] border-b border-[#F7F3EC]/12',
  }[navState];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 h-[72px] flex items-center ${navClasses}`}
    >
      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 select-none">
          {navState === 'ink' ? (
            <div className="bg-[#F7F3EC] px-3 py-1.5 rounded-full inline-flex items-center shadow-xs">
              <img
                src="/logo.png"
                alt="Slow Page Report"
                className="h-7 w-auto object-contain"
              />
            </div>
          ) : (
            <div className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Slow Page Report"
                className="h-8 w-auto object-contain"
              />
            </div>
          )}
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-tight">
          <a
            href="#what-i-do"
            className={`transition-opacity hover:opacity-100 ${
              navState === 'ink' ? 'text-[#F7F3EC]/80 hover:text-[#F7F3EC]' : 'text-[#121A24]/80 hover:text-[#121A24]'
            }`}
          >
            What I do
          </a>
          <a
            href="#how-it-works"
            className={`transition-opacity hover:opacity-100 ${
              navState === 'ink' ? 'text-[#F7F3EC]/80 hover:text-[#F7F3EC]' : 'text-[#121A24]/80 hover:text-[#121A24]'
            }`}
          >
            How it works
          </a>
          <a
            href="#about"
            className={`transition-opacity hover:opacity-100 ${
              navState === 'ink' ? 'text-[#F7F3EC]/80 hover:text-[#F7F3EC]' : 'text-[#121A24]/80 hover:text-[#121A24]'
            }`}
          >
            About
          </a>
        </nav>

        {/* CTA Button */}
        <div>
          <a
            href={DETAILS.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-transform active:scale-95 ${
              navState === 'ink'
                ? 'bg-[#0F6B6B] text-[#F7F3EC] hover:bg-[#147e7e]'
                : 'bg-[#121A24] text-[#F7F3EC] hover:bg-[#0F6B6B]'
            }`}
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
};

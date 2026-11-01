import React, { useState } from 'react';
import { DETAILS } from '../constants';
import { MagneticButton } from './MagneticButton';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="relative w-full bg-[#F7F3EC] text-[#121A24] py-24 sm:py-36 px-6 sm:px-8 border-t border-[#121A24]/10"
    >
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#121A24]/[0.02] border border-[#121A24]/12 rounded-[28px] p-8 sm:p-14 shadow-xs">
          {/* Header row: small round photo and letter heading */}
          <div className="flex items-center gap-5 mb-8 pb-8 border-b border-[#121A24]/10">
            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-[#121A24]/15 bg-[#121A24]">
              {imgError ? (
                <div className="w-full h-full bg-gradient-to-br from-[#121A24] to-[#0F6B6B] flex items-center justify-center film-grain">
                  <span className="text-outline-cream font-serif text-xl tracking-tight">
                    VKL
                  </span>
                </div>
              ) : (
                <img
                  src="/me.jpg"
                  alt={DETAILS.name}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5A6B7B] mb-1">
                Founder
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#121A24]">
                A note from {DETAILS.name}
              </h2>
            </div>
          </div>

          {/* Letter Body */}
          <div className="text-lg sm:text-xl text-[#121A24]/85 leading-relaxed space-y-5 mb-10">
            <p>
              I am an IT engineer helping websites for good performance improvements. Based in {DETAILS.city}, I build and sell small, plain tools that show a team its slow pages, its release checks and its tool changes early, using the teams you already know.
            </p>
            <p>
              I work directly with you to see the slow page before your users do, so your team can ship updates with complete confidence in response times.
            </p>
          </div>

          {/* Handwritten signature */}
          <div className="mb-10 pt-2">
            <p className="font-hand text-4xl sm:text-5xl text-[#0F6B6B] select-none">
              {DETAILS.firstName}
            </p>
          </div>

          {/* Button: "Book a 20 minute call with Vinod" */}
          <div className="pt-2">
            <MagneticButton
              href={DETAILS.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="px-8 py-4 text-base font-semibold tracking-tight shadow-md"
            >
              Book a 20 minute call with {DETAILS.firstName}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

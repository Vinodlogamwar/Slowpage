import React from 'react';
import { DETAILS } from '../constants';
import { MagneticButton } from './MagneticButton';

export const FinalInvitation: React.FC = () => {
  return (
    <section
      data-theme="ink"
      className="relative w-full bg-[#121A24] text-[#F7F3EC] py-28 sm:py-36 md:py-44 px-6 sm:px-8 film-grain border-t border-[#F7F3EC]/10"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0F6B6B] mb-6">
          Next Step
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#F7F3EC] max-w-[20ch] mb-12">
          Let’s give your evenings back: see the slow page before your users do.
        </h2>

        {/* Booking button in the accent colour */}
        <div className="mb-10">
          <MagneticButton
            href={DETAILS.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            className="px-9 py-4 text-base font-semibold tracking-tight shadow-lg"
          >
            Book a 20 minute call
          </MagneticButton>
        </div>

        {/* WhatsApp and email as plain links under it */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-sm sm:text-base text-[#F7F3EC]/70">
          <a
            href={DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F3EC] transition-colors underline-offset-4 hover:underline"
          >
            Message me on WhatsApp
          </a>
          <span className="hidden sm:inline text-[#F7F3EC]/20">•</span>
          <a
            href={DETAILS.emailUrl}
            className="hover:text-[#F7F3EC] transition-colors underline-offset-4 hover:underline"
          >
            {DETAILS.email}
          </a>
        </div>
      </div>
    </section>
  );
};

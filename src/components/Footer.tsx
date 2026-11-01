import React from 'react';
import { DETAILS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer
      data-theme="ink"
      className="relative w-full bg-[#121A24] text-[#F7F3EC] py-16 px-6 sm:px-8 border-t border-[#F7F3EC]/10 film-grain"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left: Logo on small cream rounded panel & City */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="bg-[#F7F3EC] px-3.5 py-1.5 rounded-full inline-flex items-center shadow-xs">
            <img
              src="/logo.png"
              alt={DETAILS.businessName}
              className="h-7 w-auto object-contain"
            />
          </div>
          <span className="text-sm text-[#F7F3EC]/60">{DETAILS.city}</span>
        </div>

        {/* Center: Three contact links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 text-sm text-[#F7F3EC]/80">
          <a
            href={DETAILS.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F3EC] transition-colors"
          >
            Book a 20 minute call
          </a>
          <a
            href={DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7F3EC] transition-colors"
          >
            Message me on WhatsApp
          </a>
          <a
            href={DETAILS.emailUrl}
            className="hover:text-[#F7F3EC] transition-colors"
          >
            {DETAILS.email}
          </a>
        </div>

        {/* Right: Year and Business Name */}
        <div className="text-xs text-[#F7F3EC]/50 font-medium">
          © {new Date().getFullYear()} {DETAILS.businessName}.
        </div>
      </div>
    </footer>
  );
};

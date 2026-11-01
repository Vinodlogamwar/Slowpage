/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { HowWeStartSection } from './components/HowWeStartSection';
import { AboutSection } from './components/AboutSection';
import { QuestionsSection } from './components/QuestionsSection';
import { FinalInvitation } from './components/FinalInvitation';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#121A24] selection:bg-[#0F6B6B]/20 selection:text-[#121A24] overflow-x-hidden">
      {/* 1. Top bar */}
      <TopBar />

      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. The problem */}
        <ProblemSection />

        {/* 4. What I do */}
        <WhatIDoSection />

        {/* 5. Before and after */}
        <BeforeAfterSection />

        {/* 6. How we start */}
        <HowWeStartSection />

        {/* 7. About me */}
        <AboutSection />

        {/* 8. Questions */}
        <QuestionsSection />

        {/* 9. Final invitation */}
        <FinalInvitation />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Phone sticky bottom bar */}
      <MobileStickyBar />
    </div>
  );
}

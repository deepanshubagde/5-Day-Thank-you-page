import React, { useState } from 'react';

export default function App() {
  const [hasClicked, setHasClicked] = useState(false);

  // Dynamic WhatsApp link via URL search param (e.g. ?link=... or ?group=...)
  // Default to official workshop community invite
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const whatsappUrl = urlParams?.get('link') || urlParams?.get('group') || 'https://chat.whatsapp.com/invite';

  const handleCtaClick = () => {
    setHasClicked(true);
  };

  return (
    <main
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-x-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #D9530F 0%, #E87A18 20%, #EFA938 42%, #4FA29F 76%, #89C7CC 100%)',
      }}
    >
      {/* Soft serene ambient glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full pointer-events-none -z-5"
        style={{
          background: 'radial-gradient(circle, rgba(254, 240, 138, 0.25) 0%, rgba(245, 158, 11, 0.12) 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Single-Column, Mobile-Optimized Container */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-3.5 sm:px-6 pt-3.5 sm:pt-6 pb-4 sm:pb-6 flex flex-col justify-between flex-grow min-h-[100dvh]">
        
        {/* ============================================================== */}
        {/* 1. TOP SECTION: LIVE BADGE (Light Boundary) & WORKSHOP TITLE   */}
        {/* ============================================================== */}
        <header className="flex flex-col items-center text-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Light-colored boundary pill capsule for LIVE */}
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-red-300 shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-blur-md"
            role="status"
            aria-label="Live event indicator"
          >
            {/* Blinking red indicator dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 shadow-[0_0_8px_#ef4444]"></span>
            </span>
            {/* Bold red LIVE text */}
            <span className="font-brand font-black text-xs sm:text-sm tracking-widest text-red-600 uppercase animate-live-blink">
              LIVE
            </span>
          </div>

          {/* Workshop Title Pill with translucent backdrop */}
          <div className="w-full max-w-sm sm:max-w-md px-3.5 py-1.5 sm:py-2 rounded-2xl bg-black/25 backdrop-blur-[3px] border border-white/20 shadow-sm flex flex-col items-center justify-center">
            <h2 className="font-brand font-extrabold tracking-wide text-xs sm:text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] uppercase text-center leading-tight">
              5 Days Advanced Mindful Manifestation Workshop
            </h2>
            <p className="font-body font-semibold tracking-wide text-[10px] sm:text-xs text-amber-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] mt-0.5">
              Buddhist Secret to Abundance Life
            </p>
          </div>
        </header>

        {/* ============================================================== */}
        {/* 2. CENTRAL CONTENT BLOCK & CALL TO ACTION                      */}
        {/* ============================================================== */}
        <section className="my-auto py-3 sm:py-5 flex flex-col items-center text-center">
          
          {/* Headline: CONGRATULATIONS! */}
          <div className="relative inline-block px-2">
            <h1 
              className="font-heading font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFBEB] via-[#FDE68A] to-[#F59E0B]"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(245, 158, 11, 0.45))',
                WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.6)',
              }}
            >
              CONGRATULATIONS!
            </h1>
          </div>

          {/* Subheading: Welcome to the 5-Day Advanced Mindful Manifestation Workshop */}
          <h2 className="mt-2.5 sm:mt-3.5 font-brand font-bold text-base sm:text-xl md:text-2xl text-white max-w-xs sm:max-w-md leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] px-1">
            Welcome to the 5-Day Advanced Mindful Manifestation Workshop.
          </h2>

          {/* Instructional: The final step is to join the official workshop community group. */}
          <p className="mt-2 sm:mt-2.5 font-body font-bold text-xs sm:text-sm md:text-base text-[#042f2e] max-w-xs sm:max-w-sm leading-relaxed px-2">
            The final step is to join the official workshop community group.
          </p>

          {/* ============================================================== */}
          {/* 3. THE MASSIVE CALL TO ACTION BUTTON                           */}
          {/* ============================================================== */}
          <div className="w-full mt-4 sm:mt-6 flex flex-col items-center">
            
            {/* Animated Pointing Finger */}
            <div 
              className="text-2xl sm:text-3xl select-none mb-1.5 sm:mb-2 animate-gentle-bounce cursor-default"
              aria-hidden="true"
            >
              👇
            </div>

            {/* Massive Call to Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              aria-label="Click and Join the WhatsApp Group"
              className="group relative w-full block text-decoration-none rounded-2xl p-0.5 sm:p-1 transition-all duration-300 transform active:scale-[0.98] hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-amber-300/60"
            >
              {/* Outer Golden Border with Glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 opacity-95 blur-[1px] group-hover:opacity-100 group-hover:blur-[2px] transition duration-300 gold-glow"></div>

              {/* Inner Button Body: Deep Teal / Rich Blue */}
              <div className="relative w-full rounded-[14px] sm:rounded-[15px] bg-gradient-to-b from-[#0d4a57] via-[#09353e] to-[#06272e] border border-amber-300/80 py-3.5 sm:py-4 px-3 sm:px-5 flex items-center justify-center gap-2.5 sm:gap-3.5 shadow-2xl transition-colors">
                
                {/* Crisp High-Contrast WhatsApp Logo Badge */}
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-200">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-sm"
                    aria-hidden="true"
                  >
                    <path d="M16.01 3C8.83 3 3 8.83 3 16.01c0 2.39.65 4.63 1.78 6.56L3 29l6.63-1.74c1.86 1.02 3.99 1.6 6.38 1.6 7.18 0 13.01-5.83 13.01-13.01C29.02 8.83 23.19 3 16.01 3zm0 23.83c-2.12 0-4.08-.59-5.75-1.61l-.41-.25-4.27 1.12 1.14-4.16-.27-.43a10.74 10.74 0 0 1-1.65-5.69c0-5.97 4.86-10.83 10.83-10.83 5.97 0 10.83 4.86 10.83 10.83 0 5.97-4.86 10.83-10.83 10.83zm5.94-8.12c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.64-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.15-.15.33-.38.5-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74 0 1.61 1.18 3.17 1.34 3.39.16.22 2.31 3.53 5.6 4.95.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.42.19-1.55-.08-.13-.3-.22-.63-.38z" />
                  </svg>
                </div>

                {/* Button Text: Bold, capitalized, white, clear responsive font */}
                <span className="font-brand font-black text-xs xs:text-sm sm:text-base md:text-lg text-white tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-tight text-center sm:text-left flex-grow">
                  CLICK &amp; JOIN THE WHATSAPP GROUP
                </span>
              </div>
            </a>

            {/* Mandatory Warning Text */}
            <p className="mt-2.5 sm:mt-3 font-body font-bold text-xs sm:text-sm text-amber-950 tracking-wide select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
              (Joining WhatsApp group is mandatory)
            </p>

            {/* Subtle confirmation feedback on click */}
            {hasClicked && (
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/30 text-[11px] sm:text-xs text-amber-950 font-medium animate-in fade-in duration-300">
                <span>✨ Redirecting to your community group...</span>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. FOOTER: CENTERED COPYRIGHT                                  */}
        {/* ============================================================== */}
        <footer className="w-full flex items-center justify-center pt-2 pb-1 shrink-0 select-none">
          <p className="text-center font-body text-[11px] sm:text-xs font-semibold tracking-wide text-slate-900/80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            All Copyright Reserved © Monkhood
          </p>
        </footer>

      </div>
    </main>
  );
}

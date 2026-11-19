import React, { useState, useEffect } from 'react';

// Declare fbq globally on window
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function App() {
  const [hasClicked, setHasClicked] = useState(false);

  // Official Workshop WhatsApp Group Invite Link
  const OFFICIAL_WHATSAPP_LINK = 'https://chat.whatsapp.com/FNiK0iIBPuHEykENiA4vRz';

  // Dynamic WhatsApp link via URL search param (e.g. ?link=... or ?group=...)
  // Default to official workshop community invite
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const whatsappUrl = urlParams?.get('link') || urlParams?.get('group') || OFFICIAL_WHATSAPP_LINK;

  // Track page load conversion events in Meta Pixel (Lead & CompleteRegistration)
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'CompleteRegistration', {
          content_name: '5 Days Advanced Mindful Manifestation Workshop',
          status: 'success',
        });
        window.fbq('track', 'Lead', {
          content_name: '5 Days Advanced Mindful Manifestation Workshop',
          currency: 'INR',
        });
      }
    } catch {
      // Safe fallback if blocked by client-side ad-blockers
    }
  }, []);

  const handleCtaClick = () => {
    setHasClicked(true);

    // Track WhatsApp button click in Meta Pixel
    try {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Contact', {
          content_name: 'WhatsApp Community Group',
          status: 'clicked',
        });
        window.fbq('trackCustom', 'JoinWhatsAppClick', {
          content_name: '5 Days Advanced Mindful Manifestation Workshop',
          destination: 'WhatsApp Community Group',
        });
      }
    } catch {
      // Safe fallback if blocked by browser extensions
    }
  };

  return (
    <main
      className="relative min-h-[100dvh] w-full flex flex-col overflow-x-hidden"
      style={{
        background: 'linear-gradient(180deg, #D9530F 0%, #E87A18 22%, #EFA938 46%, #4FA29F 78%, #89C7CC 100%)',
      }}
    >
      {/* Subtle warm radiance behind central message */}
      <div
        className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(254, 243, 199, 0.24) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 72%)',
        }}
        aria-hidden="true"
      />

      {/* Mobile-First Centered Container with Safe-Area Padding & Balanced Spacing */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg mx-auto px-5 sm:px-8 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] flex flex-col items-center flex-grow min-h-[100dvh]">

        {/* 1. Top Section: LIVE Badge & Uncluttered Workshop Title */}
        <header className="w-full flex flex-col items-center text-center gap-3 shrink-0 pt-1">
          {/* Light-boundary LIVE badge for high contrast against orange gradient */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-red-200 shadow-sm"
            role="status"
            aria-label="Live event indicator"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
            </span>
            <span className="font-brand font-extrabold text-xs tracking-widest text-red-600 uppercase animate-live-blink">
              LIVE
            </span>
          </div>

          <div className="flex flex-col items-center text-center max-w-[320px] sm:max-w-md">
            <p className="font-brand font-bold text-[13px] sm:text-sm tracking-wide text-white uppercase leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] text-balance">
              5 Days Advanced Mindful Manifestation Workshop
            </p>
            <p className="font-body font-medium text-xs text-amber-100 mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
              Buddhist Secret to Abundance Life
            </p>
          </div>
        </header>

        {/* 2. Central Content Block: Shortened, Centered, Easy to Scan */}
        <section className="w-full flex flex-col items-center text-center mt-8 sm:mt-10 pb-6">
          <h1
            className="font-heading font-bold text-[clamp(1.4rem,6.2vw,2.5rem)] tracking-[0.06em] uppercase text-[#FFF8DB] text-center leading-tight whitespace-nowrap"
            style={{
              textShadow: '0 2px 8px rgba(120, 53, 15, 0.55), 0 1px 2px rgba(0, 0, 0, 0.35)',
            }}
          >
            CONGRATULATIONS!
          </h1>

          <p className="mt-3.5 font-brand font-semibold text-lg sm:text-xl text-white max-w-[290px] sm:max-w-sm leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] text-balance">
            Your workshop seat is confirmed.
          </p>

          <p className="mt-2.5 font-body font-semibold text-sm sm:text-base text-[#042A2E] max-w-[300px] sm:max-w-sm leading-relaxed text-balance">
            Tap below to join the official WhatsApp group for session updates.
          </p>

          {/* 3. Primary Call to Action */}
          <div className="w-full mt-7 sm:mt-8 flex flex-col items-center">
            <div
              className="text-2xl sm:text-3xl select-none mb-2.5 animate-gentle-bounce cursor-default"
              aria-hidden="true"
            >
              👇
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              aria-label="Click and Join the WhatsApp Group"
              className="group relative w-full block rounded-2xl p-[2px] transition-transform duration-200 active:scale-[0.98] hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200/80"
            >
              {/* Gold border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 opacity-95 gold-glow" />

              {/* Deep teal touch-optimized CTA surface (min height >= 60px) */}
              <div className="relative w-full min-h-[60px] rounded-[14px] bg-gradient-to-b from-[#0D4A57] via-[#09353E] to-[#06272E] border border-amber-200/75 py-3.5 px-4 sm:px-6 flex items-center justify-center gap-3 shadow-xl">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md border-2 border-white">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M16.01 3C8.83 3 3 8.83 3 16.01c0 2.39.65 4.63 1.78 6.56L3 29l6.63-1.74c1.86 1.02 3.99 1.6 6.38 1.6 7.18 0 13.01-5.83 13.01-13.01C29.02 8.83 23.19 3 16.01 3zm0 23.83c-2.12 0-4.08-.59-5.75-1.61l-.41-.25-4.27 1.12 1.14-4.16-.27-.43a10.74 10.74 0 0 1-1.65-5.69c0-5.97 4.86-10.83 10.83-10.83 5.97 0 10.83 4.86 10.83 10.83 0 5.97-4.86 10.83-10.83 10.83zm5.94-8.12c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.51-2.64-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.15-.15.33-.38.5-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.74 0 1.61 1.18 3.17 1.34 3.39.16.22 2.31 3.53 5.6 4.95.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.63-.09 1.93-.79 2.2-1.55.27-.76.27-1.42.19-1.55-.08-.13-.3-.22-.63-.38z" />
                  </svg>
                </div>

                <span className="font-brand font-extrabold text-[14px] sm:text-base text-white tracking-wide uppercase leading-tight text-center">
                  CLICK &amp; JOIN THE WHATSAPP GROUP
                </span>
              </div>
            </a>

            <p className="mt-3 font-body font-semibold text-xs sm:text-sm text-[#042A2E] tracking-wide text-center">
              (Joining WhatsApp group is mandatory)
            </p>

            {hasClicked && (
              <p className="mt-2.5 text-xs text-[#042A2E] font-medium">
                Opening WhatsApp group...
              </p>
            )}
          </div>
        </section>

        {/* 4. Clean Centered Footer */}
        <footer className="w-full flex items-center justify-center mt-auto pt-4 pb-1 shrink-0">
          <p className="text-center font-body text-xs font-medium tracking-wide text-[#042A2E]/85">
            All Copyright Reserved © Monkhood
          </p>
        </footer>

      </div>
    </main>
  );
}

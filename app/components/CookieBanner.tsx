'use client'
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white p-4 md:p-6 z-50 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Testo */}
        <div className="flex-1 text-sm md:text-base">
          <p>
            Questo sito utilizza cookie tecnici necessari per il funzionamento. 
            Continuando la navigazione accetti il loro utilizzo.{' '}
            <a href="/cookies" className="underline text-yellow-400 hover:text-yellow-300">
              Scopri di più
            </a>
          </p>
        </div>

        {/* Pulsanti */}
        <div className="flex gap-3 flex-shrink-0">
          <a 
            href="/cookies"
            className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all text-sm font-semibold"
          >
            Dettagli
          </a>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-all text-sm font-semibold"
          >
            Accetta
          </button>
        </div>

      </div>
    </div>
  );
}
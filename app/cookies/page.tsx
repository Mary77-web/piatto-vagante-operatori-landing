export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <a href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors" style={{fontFamily: 'Copperplate, serif'}}>
            ← PIATTO VAGANTE
          </a>
        </div>
      </header>

      {/* Contenuto */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        
        <p className="text-sm text-gray-500 mb-8">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Cosa Sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano 
              al browser dell'utente, dove vengono memorizzati per essere poi 
              ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cookie Utilizzati da Questo Sito</h2>
            <p>
              Il sito <strong>piattovagante.it</strong> utilizza le seguenti 
              tipologie di cookie:
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Tecnici</h3>
              <p>
                Cookie strettamente necessari per il funzionamento del sito e 
                per la gestione delle sessioni utente. Questi cookie non richiedono 
                il consenso dell'utente.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cookie Analitici</h3>
              <p>
                Utilizzati per raccogliere informazioni aggregate sull'utilizzo 
                del sito web (numero di visitatori, pagine visitate, tempo di 
                permanenza). Questi dati sono utilizzati esclusivamente per 
                migliorare l'esperienza utente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookie di Terze Parti</h2>
            <p>
              Il sito potrebbe utilizzare servizi di terze parti che installano 
              i propri cookie:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Google Analytics:</strong> Per analisi statistiche aggregate 
                (se applicabile)
              </li>
              <li>
                <strong>Vercel:</strong> Per l'hosting e la gestione del sito web
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Durata dei Cookie</h2>
            <p>
              La durata dei cookie varia in base alla loro tipologia e funzione:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Cookie di sessione:</strong> Vengono eliminati automaticamente 
                alla chiusura del browser
              </li>
              <li>
                <strong>Cookie persistenti:</strong> Rimangono memorizzati fino alla 
                scadenza prestabilita o fino alla loro eliminazione manuale
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Gestione dei Cookie</h2>
            <p>
              L'utente può gestire le proprie preferenze relative ai cookie 
              direttamente dal proprio browser:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie
              </li>
              <li>
                <strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie
              </li>
              <li>
                <strong>Safari:</strong> Preferenze → Privacy → Cookie
              </li>
              <li>
                <strong>Edge:</strong> Impostazioni → Privacy → Cookie
              </li>
            </ul>
            <p className="mt-4">
              La disabilitazione dei cookie tecnici potrebbe compromettere 
              il corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Consenso</h2>
            <p>
              Utilizzando questo sito web e accettando la presente Cookie Policy, 
              l'utente acconsente all'utilizzo dei cookie secondo le modalità 
              descritte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Aggiornamenti</h2>
            <p>
              La presente Cookie Policy può essere aggiornata periodicamente. 
              Eventuali modifiche saranno pubblicate su questa pagina con 
              indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contatti</h2>
            <p>
              Per informazioni sulla Cookie Policy:{' '}
              <a href="mailto:info@piattovagante.it" className="text-red-800 underline">
                info@piattovagante.it
              </a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Piatto Vagante - AiLab Communication</p>
        </div>
      </footer>
    </div>
  );
}
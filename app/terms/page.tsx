export default function Terms() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Termini e Condizioni</h1>
        
        <p className="text-sm text-gray-500 mb-8">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Oggetto</h2>
            <p>
              I presenti Termini e Condizioni regolano l'utilizzo del sito web{' '}
              <strong>piattovagante.it</strong> e della piattaforma Piatto Vagante, 
              gestita da <strong>AiLab Communication</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servizio Offerto</h2>
            <p>
              Piatto Vagante è una piattaforma digitale dedicata al turismo 
              enogastronomico campano che mette in connessione operatori locali 
              (cantine, agriturismi, ristoranti, oleifici, etc.) con viaggiatori 
              interessati a esperienze autentiche del territorio campano.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registrazione Operatori</h2>
            <p>
              Gli operatori interessati possono richiedere informazioni e una demo 
              gratuita compilando il form di contatto presente sul sito.
            </p>
            <p className="mt-4">
              <strong>Programma Founding Operators:</strong> I primi 30 operatori 
              che aderiranno alla piattaforma beneficeranno di 3 mesi di utilizzo 
              gratuito con onboarding personalizzato incluso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Condizioni Economiche</h2>
            <p>Dopo il periodo promozionale, le condizioni standard sono:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Abbonamento mensile:</strong> €59/mese</li>
              <li><strong>Commissione per prenotazione:</strong> 9,5% sul valore della prenotazione completata</li>
              <li><strong>Onboarding:</strong> Incluso nel servizio</li>
              <li><strong>Dashboard professionale:</strong> Inclusa</li>
              <li><strong>Supporto dedicato:</strong> Incluso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Obblighi degli Operatori</h2>
            <p>Gli operatori che aderiscono alla piattaforma si impegnano a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Fornire informazioni veritiere e aggiornate sulla propria attività</li>
              <li>Gestire tempestivamente le prenotazioni ricevute tramite la piattaforma</li>
              <li>Garantire la qualità dei servizi offerti</li>
              <li>Rispettare le normative vigenti nel proprio settore</li>
              <li>Mantenere aggiornati prezzi, disponibilità e informazioni</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti presenti sul sito (testi, loghi, grafica, immagini) 
              sono di proprietà di AiLab Communication e sono protetti dalle leggi 
              sul diritto d'autore. È vietata la riproduzione non autorizzata.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitazione di Responsabilità</h2>
            <p>
              Piatto Vagante agisce come intermediario tecnologico tra operatori e 
              viaggiatori. La responsabilità per la qualità dei servizi erogati 
              rimane in capo agli operatori.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Recesso e Cancellazione</h2>
            <p>
              Gli operatori possono recedere dal servizio in qualsiasi momento con 
              preavviso di 30 giorni, comunicandolo via email a{' '}
              <a href="mailto:info@piattovagante.it" className="text-red-800 underline">
                info@piattovagante.it
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifiche ai Termini</h2>
            <p>
              AiLab Communication si riserva il diritto di modificare i presenti 
              Termini e Condizioni in qualsiasi momento. Le modifiche saranno 
              comunicate agli operatori registrati e pubblicate sul sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Legge Applicabile e Foro Competente</h2>
            <p>
              I presenti Termini e Condizioni sono regolati dalla legge italiana. 
              Per qualsiasi controversia sarà competente il Foro di NAPOLI.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contatti</h2>
            <p>
              Per informazioni sui Termini e Condizioni:{' '}
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
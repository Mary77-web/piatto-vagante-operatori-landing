export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        
        <p className="text-sm text-gray-500 mb-8">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
        </p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati è <strong>AiLab Communication</strong>.
            </p>
            <p>
              Per qualsiasi informazione relativa al trattamento dei dati personali, è possibile contattarci all'indirizzo email:{' '}
              <a href="mailto:info@piattovagante.it" className="text-red-800 underline">info@piattovagante.it</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Dati Raccolti</h2>
            <p>
              Attraverso il form di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Nome e Cognome</li>
              <li>Indirizzo Email</li>
              <li>Numero di Telefono</li>
              <li>Nome dell'Attività</li>
              <li>Tipo di Operatore</li>
              <li>Zona geografica</li>
              <li>Preferenze di contatto</li>
              <li>Note o domande (facoltative)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalità del Trattamento</h2>
            <p>I dati personali raccolti vengono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Rispondere alle richieste di informazioni e demo</li>
              <li>Fornire assistenza e supporto</li>
              <li>Gestire il processo di onboarding sulla piattaforma</li>
              <li>Invio di comunicazioni relative ai servizi richiesti</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Giuridica</h2>
            <p>
              Il trattamento dei dati personali si basa sul <strong>consenso dell'interessato</strong>, 
              espresso mediante la compilazione e l'invio del form di contatto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Conservazione dei Dati</h2>
            <p>
              I dati personali saranno conservati per il tempo strettamente necessario 
              al perseguimento delle finalità sopra indicate e comunque non oltre 24 mesi 
              dalla raccolta, salvo diverse esigenze tecniche o di legge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Comunicazione e Diffusione</h2>
            <p>
              I dati personali non saranno diffusi a terzi. Potranno essere comunicati 
              esclusivamente a fornitori di servizi tecnici necessari per l'erogazione 
              del servizio (es. SendGrid per l'invio email).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Diritti dell'Interessato</h2>
            <p>L'interessato ha il diritto di:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Accedere ai propri dati personali</li>
              <li>Richiedere la rettifica o la cancellazione</li>
              <li>Limitare il trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="mt-4">
              Per esercitare tali diritti, contattare:{' '}
              <a href="mailto:info@piattovagante.it" className="text-red-800 underline">info@piattovagante.it</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Reclami</h2>
            <p>
              L'interessato ha il diritto di proporre reclamo all'Autorità Garante 
              per la Protezione dei Dati Personali.
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
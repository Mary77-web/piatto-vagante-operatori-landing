'use client'
import { useState } from 'react';
import CookieBanner from './components/CookieBanner';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); 
    
    const formData = new FormData(e.currentTarget);
    
    
    const data = {
  fullName: formData.get('fullName'),
  phone: formData.get('phone'),
  operatorType: formData.get('operatorType'),
  // Campi vuoti per compatibilità API
  email: '',
  businessName: '',
  zone: '',
  contactPreference: 'WhatsApp',
  notes: ''
};

  try {
  const response = await fetch('/api/lead-operatori', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (response.ok && result.success) {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Reset form usando document.querySelector
    setTimeout(() => {
      const formElement = document.querySelector('form');
      if (formElement) {
        formElement.reset();
      }
    }, 100);
  } else {
    alert('❌ Errore: ' + (result.error || 'Si è verificato un errore'));
  }
} catch (error) {
  console.error('❌ Errore catch:', error);
  alert('❌ Errore di connessione. Riprova o contattaci direttamente.');
} finally {
  setIsSubmitting(false);
}
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 to-black/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-3xl md:text-4xl font-bold tracking-wider" 
                 style={{fontFamily: 'Copperplate, serif'}}>
              PIATTO VAGANTE
            </div>
            <span className="px-4 py-1 bg-red-800/50 rounded-full text-sm border border-red-600">
              Piattaforma Campana
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            La Prima Piattaforma Digitale
            <br />
            Solo per Operatori Campani
          </h1>

          <h2 className="text-2xl md:text-3xl mb-8 text-white/95 font-light">
            Commissioni 9,5% invece del 25%
            <br />
            Onboarding Completo Incluso
            <br />
            Vetrina Esclusiva per il Territorio Campano
          </h2>

          <p className="text-lg mb-10 text-yellow-400 font-semibold">
            ✓ Primi 30 Founding Operators: 3 Mesi Gratis | ⏰ 23 Posti Rimasti
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-red-800 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg">
              📅 Prenota Demo Gratuita
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              ↓ Scopri di Più
            </button>
          </div>

          <p className="mt-16 text-sm text-white/60 animate-pulse">
            Scorri per scoprire come funziona ↓
          </p>
        </div>
      </section>

      {/* Sezione IL PROBLEMA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              3 Problemi Che Bloccano
              <br />
              Gli Operatori Campani Oggi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Che tu sia già online o gestisci tutto a telefono,
              questi ostacoli ti stanno costando clienti ogni giorno
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* CARD 1: Commissioni */}
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Commissioni 20-25%
                <br />
                Ti Mangiano i Margini
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se usi GetYourGuide o TheFork, paghi fino al 25% per prenotazione. 
                Con margini agricoli del 30-40%, stai lavorando quasi gratis.
              </p>
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-sm font-semibold text-red-800">
                  Su €uro 10.000 di prenotazioni annuali:
                </p>
                <p className="text-lg font-bold text-red-900 mt-1">
                  TheFork: €2.500 commissioni
                </p>
                <p className="text-lg font-bold text-green-700">
                  Piatto Vagante: €950
                </p>
                <p className="text-xl font-bold text-gray-900 mt-2 border-t pt-2">
                  Risparmi: €1.550/anno
                </p>
              </div>
            </div>

            {/* CARD 2: Non Digitalizzato */}
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Gestione Telefonica
                <br />
                Tempo Sprecato
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ogni giorno: telefonate, WhatsApp, email. Confermi prenotazioni, 
gestisci doppie prenotazioni, rincorri no-show. 

Nel frattempo, i tuoi competitor con booking online ricevono 
prenotazioni automatiche mentre tu ti dedichi al tuo lavoro o mentre dormi. 
              </p>
              <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm font-semibold text-orange-900 mb-2">
                  Il problema vero:
                </p>
                <p className="text-sm text-gray-700">
                  ✗ Vorresti digitalizzare ma non sai da dove iniziare
                  <br />
                  ✗ I software sono complicati e costosi
                  <br />
                  ✗ Non hai tempo per imparare sistemi complessi
                </p>
                <p className="text-sm font-bold text-orange-900 mt-2">
                  Risultato: perdi prenotazioni di chi cerca booking online
                </p>
              </div>
            </div>

            {/* CARD 3: Zero Visibilità */}
            <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-600 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                I Turisti Non Ti Trovano
                <br />
                Su Google
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Il turista cerca cantina o agriturismo in Campania su Google. 
                O non esci nei risultati, o se esci, deve chiamarti/inviare email. 
                Troppa friction → abbandona e prenota chi ha booking online immediato.
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">
                  Quello che succede oggi:
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>1. Turista cerca su Google</p>
                  <p>2. Trova il tuo sito/Facebook (se va bene)</p>
                  <p>3. Vede numero di telefono o email</p>
                  <p>4. Deve chiamare/scrivere e aspettare risposta</p>
                  <p className="font-bold text-red-700 pt-1">
                    5. Abbandona → prenota competitor con booking istantaneo
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sezione LA SOLUZIONE */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header Sezione */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Piatto Vagante: La Piattaforma
              <br />
              Pensata per Operatori Campani
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Non siamo l'ennesima piattaforma globale.
              Siamo la prima piattaforma digitale costruita SOLO
              per il turismo enogastronomico campano.
            </p>
          </div>

          {/* 4 Value Props Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* VALUE PROP 1: Prezzi Trasparenti */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-800 text-white rounded-full text-3xl font-bold mb-4">
                9.5%
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Prezzi Trasparenti ed Equi
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>9,5% commissioni</strong> per prenotazione completata + <strong>€59/mese</strong> abbonamento.
                Onboarding, dashboard professionale e supporto dedicato inclusi.
              </p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm font-bold text-green-800">
                   Founding Operators (primi 30): <strong>3 mesi GRATIS</strong>
                </p>
                <p className="text-xs text-green-700 mt-1">
                  Provi senza pagare, poi decidi se continuare
                </p>
              </div>
              <div className="text-sm text-gray-500 pt-3 border-t mt-3">
                TheFork: 25% + setup | GetYourGuide: 20-25% + fees
              </div>
            </div>

            {/* VALUE PROP 2: Solo Campania */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-800 text-white rounded-full text-2xl font-bold mb-4">
                100%
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Solo Campania
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Valorizziamo esclusivamente il territorio campano.
                Chi cerca esperienze campane trova SOLO operatori campani.
                Visibilità territoriale garantita, autenticità certificata.
              </p>
            </div>

            {/* VALUE PROP 3: Onboarding Completo */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-800 text-white rounded-full text-sm font-bold mb-4">
                FULL
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Onboarding Completo
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Non ti diamo solo un software. Facciamo tutto noi:
                mini - sito con foto, descrizioni, calendario, prezzi. Tu fai l'operatore,
                noi gestiamo la digitalizzazione.
              </p>
            </div>

            {/* VALUE PROP 4: Dashboard Professionale */}
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-800 text-white rounded-full text-sm font-bold mb-4">
                PRO
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Dashboard Professionale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Gestisci tutto dalla tua dashboard: conferma prenotazioni con un tap,
                aggiorna calendario, vedi analytics. Semplice come WhatsApp,
                potente come i tool enterprise.
              </p>
            </div>

          </div>
{/* Comparison Table */}
<div className="max-w-4xl mx-auto mt-16">
<h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
Confronto con Piattaforme Internazionali
</h3>
{/* DESKTOP: Tabella classica */}
<div className="hidden md:block bg-white rounded-xl shadow-xl overflow-hidden">
<table className="w-full">
<thead>
<tr className="bg-gray-100 border-b-2 border-gray-200">
<th className="p-4 text-left text-gray-900 font-semibold">Caratteristica</th>
<th className="p-4 text-center bg-green-50 text-gray-900 font-semibold">Piatto Vagante</th>
<th className="p-4 text-center text-gray-900 font-semibold">TheFork</th>
<th className="p-4 text-center text-gray-900 font-semibold">GetYourGuide</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50">
<td className="p-4 font-semibold text-gray-900">Commissione</td>
<td className="p-4 text-center bg-green-50 font-bold text-green-700">9,5%</td>
<td className="p-4 text-center text-red-600 font-semibold">25%</td>
<td className="p-4 text-center text-red-600 font-semibold">20-25%</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="p-4 font-semibold text-gray-900">Solo Campania</td>
<td className="p-4 text-center bg-green-50 text-2xl">✅</td>
<td className="p-4 text-center text-2xl">❌</td>
<td className="p-4 text-center text-2xl">❌</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="p-4 font-semibold text-gray-900">Onboarding Personalizzato</td>
<td className="p-4 text-center bg-green-50 font-semibold text-green-700">✅ Incluso</td>
<td className="p-4 text-center text-gray-600">❌ Self-service</td>
<td className="p-4 text-center text-gray-600">❌ Self-service</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="p-4 font-semibold text-gray-900">Supporto Dedicato</td>
<td className="p-4 text-center bg-green-50 font-semibold text-green-700">✅ Diretto</td>
<td className="p-4 text-center text-gray-600">❌ Ticket System</td>
<td className="p-4 text-center text-gray-600">❌ Ticket System</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="p-4 font-semibold text-gray-900">Valore Resta Territorio</td>
<td className="p-4 text-center bg-green-50 font-semibold text-green-700">✅ Azienda Campana</td>
<td className="p-4 text-center text-gray-600">❌ Multinazionale</td>
<td className="p-4 text-center text-gray-600">❌ Germania</td>
</tr>
</tbody>
</table>
</div>
{/* MOBILE: Card verticali */}
<div className="md:hidden space-y-6">
<div className="bg-green-50 rounded-xl shadow-lg p-6 border-2 border-green-200">
<h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Piatto Vagante</h4>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Commissione</span>
<span className="font-bold text-green-700">9,5%</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Solo Campania</span>
<span className="text-2xl">✅</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Onboarding</span>
<span className="font-semibold text-green-700">✅ Incluso</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Supporto</span>
<span className="font-semibold text-green-700">✅ Diretto</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Territorio</span>
<span className="font-semibold text-green-700 text-sm">✅ Azienda Campana</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
<h4 className="text-xl font-bold text-gray-900 mb-4 text-center">TheFork</h4>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Commissione</span>
<span className="font-semibold text-red-600">25%</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Solo Campania</span>
<span className="text-2xl">❌</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Onboarding</span>
<span className="text-gray-600">❌ Self-service</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Supporto</span>
<span className="text-gray-600">❌ Ticket System</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Territorio</span>
<span className="text-gray-600 text-sm">❌ Multinazionale</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
<h4 className="text-xl font-bold text-gray-900 mb-4 text-center">GetYourGuide</h4>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Commissione</span>
<span className="font-semibold text-red-600">20-25%</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Solo Campania</span>
<span className="text-2xl">❌</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Onboarding</span>
<span className="text-gray-600">❌ Self-service</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Supporto</span>
<span className="text-gray-600">❌ Ticket System</span>
</div>
<div className="flex justify-between items-center">
<span className="font-semibold text-gray-900">Territorio</span>
<span className="text-gray-600 text-sm">❌ Germania</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      {/* Mini CTA dopo comparison */}
<div className="bg-gray-50 py-12">
  <div className="max-w-2xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      Vuoi saperne di più?
    </h3>
    <a 
      href="https://wa.me/393388065742?text=Ciao!%20Ho%20visto%20la%20landing%20e%20sono%20interessato%20a%20Piatto%20Vagante."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl"
    >
      💬 Scrivici su WhatsApp
    </a>
  </div>
</div>
{/* Sezione COME FUNZIONA */}
<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-6">
          
          {/* Header Sezione */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Come Funziona in 4 Semplici Step
            </h2>
            <p className="text-xl text-gray-600">
              Dalla demo al primo guadagno in meno di una settimana
            </p>
          </div>

          {/* Timeline 4 Steps */}
          <div className="space-y-12">
            
            {/* STEP 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  Prenoti Demo (15 minuti)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Chiamata o videocall con noi. Ci racconti la tua realtà, 
                  capiamo insieme se Piatto Vagante è adatto per te. 
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  Onboarding Personalizzato
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Noi facciamo tutto: creiamo il tuo mini - sito con foto della tua azienda, storia, certificazioni, 
                  descrizione esperienze, creazione delle camere per i soggiorni, configurazione tavoli,  calendario disponibilità, prezzi. 
                  In 60-90 minuti sei pronto. 
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  Vai Live sulla Piattaforma
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le tue esperienze, le tue offerte, sono visibili ai viaggiatori. 
                  Iniziano ad arrivare le prime prenotazioni. 
                  Tu confermi con un tap dalla dashboard mobile. Semplice.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  Ricevi Prenotazioni e Guadagna
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pagamento automatico, dopo ogni esperienza o soggiorno o tavolo confermato, attraverso Stripe, il metodo più sicuro al mondo, utilizzato da Amazon e dalle migliori piattaforme.
                  Possibilità di configurare un deposito per prenotazioni tavoli per evitare il no show. 
                  Commissione 9,5% trattenuta automaticamente, il resto ti sarà accreditato direttamente sul conto. 
                  Analytics dashboard per gestire e monitorare tutto.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sezione FORM LEAD */}
<section className="py-20 bg-gradient-to-b from-red-900 to-black">
  <div className="max-w-3xl mx-auto px-6">
    
    {/* Header Sezione */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
        Unisciti ai Primi 30 Founding Operators
      </h2>
      <p className="text-xl text-white/90 mb-2">
        3 Mesi Gratis + Onboarding Premium
      </p>
      <p className="text-lg text-yellow-400 font-semibold">
        Posti rimasti: 23/30
      </p>
    </div>

    {/* WhatsApp CTA */}
    <div className="text-center mb-8">
      <p className="text-white/80 mb-4 text-lg">Preferisci parlare subito?</p>
      <a 
        href="https://wa.me/393388065742?text=Ciao!%20Sono%20interessato%20a%20Piatto%20Vagante.%20Vorrei%20saperne%20di%20più."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl"
      >
        💬 Scrivici su WhatsApp
      </a>
      <p className="text-white/60 text-sm mt-2">Rispondiamo in pochi minuti</p>
    </div>

    <div className="text-center text-white/60 mb-8">
      <span>───── oppure compila il form ─────</span>
    </div>

    {/* FORM Card */}
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Nome e Cognome */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Nome e Cognome *
          </label>
          <input 
            type="text" 
            name="fullName"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
            placeholder="Mario Rossi"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            WhatsApp *
          </label>
          <input 
            type="tel" 
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
            placeholder="+39 333 123 4567"
          />
        </div>

        {/* Tipo Operatore */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Tipo Attività *
          </label>
          <select 
            name="operatorType"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
          >
            <option value="">-- Seleziona --</option>
            <option value="cantina">Cantina Vinicola</option>
            <option value="agriturismo">Agriturismo</option>
            <option value="oleificio">Oleificio</option>
            <option value="caseificio">Caseificio</option>
            <option value="cooking">Cooking School</option>
            <option value="ristorante">Ristorante</option>
            <option value="pizzeria">Pizzeria</option>
            <option value="birrificio">Birrificio Artigianale</option>
            <option value="altro">Altro</option>
          </select>
        </div>

        {/* Privacy Consent */}
        <div>
          <label className="flex items-start text-sm text-gray-600">
            <input type="checkbox" required className="mr-3 mt-1 w-4 h-4" />
            <span>
              Acconsento al trattamento dei dati personali secondo la{' '}
              <a href="/privacy" className="text-red-800 underline">
                Privacy Policy
              </a>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-red-800 text-white hover:bg-red-700'
          }`}
        >
          {isSubmitting ? '⏳ Invio in corso...' : 'Richiedi Informazioni'}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Ti ricontatteremo entro 24 ore lavorative
        </p>
      </form>
    </div>

    {/* Trust Elements */}
    <div className="mt-12 text-center text-white/80">
      <p>✅ Zero impegno | ✅ Scopri se fa per te | ✅ Supporto dedicato</p>
    </div>

  </div>
</section>

      {/* Popup Successo */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-4 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Richiesta Inviata!
            </h3>
            <p className="text-gray-700">
              Ti ricontatteremo entro 24 ore per fissare la demo.
            </p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="mt-6 bg-red-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700"
            >
              Perfetto!
            </button>
          </div>
        </div>
      )}
{/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Colonna 1: Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{fontFamily: 'Copperplate, serif'}}>
                PIATTO VAGANTE
              </h3>
              <p className="text-gray-400 text-sm">
                La prima piattaforma digitale dedicata esclusivamente 
                al turismo enogastronomico campano.
              </p>
            </div>

            {/* Colonna 2: Link Utili */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Link Utili</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Termini e Condizioni
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonna 3: Contatti */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contatti</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  📧 <a href="mailto:info@piattovagante.it" className="hover:text-white transition-colors">
                    info@piattovagante.it
                  </a>
                </li>
                <li>
                  📱 <a href="https://wa.me/393388065742" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +39 338 806 5742
                  </a>
                </li>
    
              </ul>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Piatto Vagante - AiLab Communication. Tutti i diritti riservati.</p>
          </div>

        </div>
      </footer>
{/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}

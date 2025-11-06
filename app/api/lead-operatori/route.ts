import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Inizializza SendGrid
const apiKey = process.env.SENDGRID_API_KEY || '';
console.log('🔍 API Key caricata:', apiKey ? 'SÌ (lunghezza: ' + apiKey.length + ')' : 'NO - VUOTA!');
sgMail.setApiKey(apiKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Invia email a Mary con i dati del lead
    await sgMail.send({
      from: {
        email: 'info@piattovagante.it',
        name: 'Piatto Vagante - Notifiche'
      },
      to: 'info@piattovagante.it',
      subject: `🎯 Nuovo Lead Operatore: ${body.businessName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #8B0000; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; color: #8B0000; font-size: 14px; text-transform: uppercase; }
            .value { margin-top: 8px; font-size: 16px; }
            .cta-box { background: #fff; padding: 20px; margin-top: 30px; border-radius: 8px; border: 2px solid #8B0000; }
            .cta-button { display: inline-block; background: #8B0000; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎯 Nuovo Lead Operatore!</h1>
            </div>
            <div class="content">
              
              <div class="field">
                <div class="label">Nome Completo</div>
                <div class="value">${body.fullName}</div>
              </div>

              <div class="field">
                <div class="label">Email</div>
                <div class="value">
                  <a href="mailto:${body.email}" style="color: #8B0000; font-weight: bold;">
                    ${body.email}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="label">Telefono</div>
                <div class="value">
                  <a href="tel:${body.phone}" style="color: #8B0000; font-weight: bold;">
                    ${body.phone}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="label">Nome Attività</div>
                <div class="value"><strong style="font-size: 18px;">${body.businessName}</strong></div>
              </div>

              <div class="field">
                <div class="label">Tipo Operatore</div>
                <div class="value">${body.operatorType}</div>
              </div>

              <div class="field">
                <div class="label">Zona</div>
                <div class="value">${body.zone}</div>
              </div>

              ${body.contactPreference ? `
              <div class="field">
                <div class="label">Preferenza Contatto</div>
                <div class="value">${body.contactPreference}</div>
              </div>
              ` : ''}

              ${body.notes ? `
              <div class="field">
                <div class="label">Note</div>
                <div class="value">${body.notes}</div>
              </div>
              ` : ''}

              <div class="cta-box">
                <p style="margin: 0 0 15px 0; font-size: 16px;"><strong>Azioni Rapide:</strong></p>
                <a href="https://wa.me/${body.phone.replace(/\D/g, '')}" class="cta-button">
                  📱 WhatsApp
                </a>
                <a href="mailto:${body.email}" class="cta-button">
                  📧 Email
                </a>
                <a href="tel:${body.phone}" class="cta-button">
                  ☎️ Chiama
                </a>
              </div>

              <p style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; font-size: 12px; color: #666;">
                Lead ricevuto il ${new Date().toLocaleString('it-IT')}
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Invia auto-responder all'operatore
    await sgMail.send({
      from: {
        email: 'info@piattovagante.it',
        name: 'Piatto Vagante'
      },
      to: body.email,
      subject: 'Richiesta Demo Ricevuta - Piatto Vagante',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #8B0000; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { padding: 30px; background: #ffffff; border-radius: 0 0 8px 8px; }
            .contact-box { background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #8B0000; }
            .signature { margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Grazie per il tuo interesse!</h1>
            </div>
            <div class="content">
              <p>Ciao <strong>${body.fullName}</strong>,</p>
              
              <p>Grazie per aver richiesto informazioni su <strong>Piatto Vagante</strong>!</p>
              
              <p>Abbiamo ricevuto la tua richiesta per <strong>${body.businessName}</strong> 
              e siamo entusiasti di conoscerti e capire come possiamo aiutarti a 
              digitalizzare la tua attività.</p>
              
              <p><strong>Ti ricontatteremo personalmente entro 24 ore</strong> per fissare 
              una demo gratuita di 15 minuti dove:</p>
              
              <ul style="line-height: 2;">
                <li>✅ Ti mostreremo come funziona la piattaforma</li>
                <li>✅ Capiremo insieme se è adatta alla tua realtà</li>
                <li>✅ Risponderemo a tutte le tue domande</li>
                <li>✅ Solo consulenza gratuita</li>
              </ul>
              
              <div class="contact-box">
                <p style="margin: 0;"><strong>Nel frattempo, se hai domande urgenti:</strong></p>
                <p style="margin: 10px 0 0 0;">
                  📧 Email: <a href="mailto:info@piattovagante.it" style="color: #8B0000;">info@piattovagante.it</a><br>
                  📱 WhatsApp: <a href="https://wa.me/393388065742" style="color: #8B0000;">+39 338 806 5742</a>
                </p>
              </div>
              
              <p>A presto!</p>
              
              <div class="signature">
                <p style="margin: 0;"><strong>Maria Teresa e Genny</strong></p>
                <p style="margin: 5px 0 0 0; color: #666;">
                  Founders - Piatto Vagante<br>
                  La piattaforma digitale per il turismo enogastronomico campano
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    });

    return NextResponse.json({ 
      success: true,
      message: 'Richiesta inviata con successo. Ti ricontatteremo entro 24 ore.' 
    });
    
  } catch (error) {
    console.error('Errore invio lead:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'invio. Riprova o contattaci direttamente.' }, 
      { status: 500 }
    );
  }
}
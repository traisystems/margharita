import { Heart } from 'lucide-react';

export default function Footer() {
  const WHATSAPP_LINK = "https://wa.me/491796790530?text=ITALIEN";

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-800 pb-8">
        
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
            <Heart className="w-5 h-5 text-brand-red fill-brand-red" />
            <span>Margharita Carusotto</span>
          </div>
          <p className="text-sm">
            Microlearning mit Margharita<br />
            Italienisch lernen mit Herz und Freude.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm">
            <li>
              WhatsApp: <a href={WHATSAPP_LINK} className="text-brand-green hover:text-white transition-colors">+49 179 6790530</a>
            </li>
            <li>
              E-Mail: <a href="mailto:lunare456bello@gmx.de" className="hover:text-white transition-colors">lunare456bello@gmx.de</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-sm">
            <li><span className="text-slate-500">Impressum:</span></li>
            <li>Margharita Carusotto (Einzelfirma)</li>
            <li>Friedrichsfelder Str. 47f</li>
            <li>68535 Edingen-Neckarhausen</li>
          </ul>
        </div>

      </div>
      
      <div className="text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Margharita Carusotto. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function UspSection() {
  const usps = [
    "100 % WhatsApp-basiert – lernen jederzeit und überall",
    "Persönlich von Margharita eingesprochene Audio-Lektionen",
    "Teilnehmer sprechen die Übungen als Sprachnachricht nach",
    "Individuell angepasste Lernwege + persönlicher Sprachtest zu Beginn",
    "Sanfte Korrekturen und herzliche persönliche Rückmeldungen",
    "Microlearning – kleine Portionen statt Überforderung",
    "Fokus auf echtes Sprechen, Verstehen und Alltagssprache",
    "Von A0 (kompletter Anfänger) bis C1",
    "Keine starren Kurszeiten – flexibel im eigenen Tempo",
    "Italienisches Lebensgefühl statt trockenem Schulbuch-Italienisch",
    "Herzliche persönliche Begleitung"
  ];

  return (
    <section className="py-24 px-4 bg-[#F0E4D4]" id="benefits">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-4"
          >
            Deine Vorteile
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Warum Microlearning mit Margherita der entspannteste Weg ist, Italienisch zu lernen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-slate-700 font-medium">{usp}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

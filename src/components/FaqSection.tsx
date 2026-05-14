import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from './WhatsAppButton';

export default function FaqSection() {
  const faqs = [
    {
      question: "Wie viel Zeit brauche ich?",
      answer: "Die Lektionen sind klein und flexibel. Du kannst sie einfach in deinen Alltag integrieren, z.B. beim Pendeln, Spazieren oder Kochen."
    },
    {
      question: "Muss ich zu festen Zeiten online sein?",
      answer: "Nein, du lernst vollkommen flexibel über WhatsApp. Es gibt keine starren Kurszeiten."
    },
    {
      question: "Korrigierst du meine Aussprache?",
      answer: "Ja, du schickst mir Sprachnachrichten und bekommst von mir sanfte Korrekturen und Tipps zur italienischen Sprachmelodie."
    },
    {
      question: "Ist das für Anfänger geeignet?",
      answer: "Absolut! Mein Microlearning ist für alle Level geeignet – vom kompletten Anfänger (A0) bis hin zu Fortgeschrittenen."
    },
    {
      question: "Muss ich Grammatik können?",
      answer: "Nein, wir lernen über Alltagssituationen, natürliche Wiederholung und Sprachaktivierung – ohne stures Grammatikpauken."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-brand-beige" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-4"
          >
            Häufige Fragen
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-white/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-800 text-lg">{faq.question}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-brand-red transition-transform duration-300",
                    isOpen ? "rotate-180" : ""
                  )} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

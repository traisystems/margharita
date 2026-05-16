import { motion } from 'framer-motion';
import { MessageCircle, Headphones, Mic } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Audio-Lektionen empfangen",
      description: "Du erhältst kleine, von mir persönlich eingesprochene Impulse direkt auf dein Smartphone."
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Nachsprechen & Üben",
      description: "Du sprichst die Übungen als Sprachnachricht nach, ganz in deinem eigenen Tempo."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Persönliches Feedback",
      description: "Ich gebe dir sanfte Korrekturen und herzliche persönliche Rückmeldungen."
    }
  ];

  return (
    <section className="py-24 px-4 bg-brand-beige" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-4"
          >
            So funktioniert Microlearning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Kleine Portionen statt Überforderung. Lerne Italienisch mühelos in deinem Alltag integriert.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-soft relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

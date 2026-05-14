import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Manuel Merkel",
      text: "Durch dich bin ich deutlich selbstbewusster geworden vor allem beim Sprechen. […] Sobald ich beim Italiener oder in der Eisdiele bin, spreche ich nur noch Italienisch. Es macht einfach Spaß. […] Es ist einfach sehr angenehm mit dir als Mensch."
    },
    {
      name: "Heike Maria Agnello",
      text: "Deine Idee auf diese Art die italienische Sprache zu vermitteln, ist wirklich mehr als gut. Diese zeitliche Flexibilität ist genial. Du machst das supersympathisch und auch in einer perfekten Dosierung."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-4 text-balance"
          >
            Das sagen meine Schüler
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Echte Stimmen von Menschen, die ihre Liebe zur italienischen Sprache entdeckt haben.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-brand-beige rounded-3xl p-10 relative shadow-soft"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-terracotta opacity-10" />
              <p className="text-xl text-slate-700 italic mb-8 relative z-10 leading-relaxed font-serif">
                „{t.text}“
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center font-bold text-brand-green text-xl">
                  {t.name.charAt(0)}
                </div>
                <p className="font-bold text-slate-800">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';

export default function FinalCtaSection() {
  return (
    <section className="py-24 px-4 bg-brand-red relative overflow-hidden" id="cta">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white font-serif mb-6 text-balance tracking-tight"
        >
          Sprechen. Fühlen. Italienisch leben. ❤️
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light"
        >
          Schreibe mir jetzt auf WhatsApp und wir finden gemeinsam heraus, wie dein Weg zur italienischen Sprache aussehen kann.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <WhatsAppButton 
            className="bg-white text-brand-green hover:bg-brand-beige"
            pulse={false}
          />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            {/* image.png is Margherita's portrait */}
            <img 
              src="/image.png" 
              alt="Margharita Carusotto" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl -z-10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">Mein Warum ✨</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-serif">
            Ich begleite Menschen dabei, Italienisch wirklich zu sprechen — ohne Druck und ohne Grammatikpauken.
          </h3>
          
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Mit meinem WhatsApp-Microlearning lernen sie die Sprache durch kleine alltagstaugliche Impulse, Sprachnachrichten und echte Dialoge — flexibel, herzlich und mit italienischem Lebensgefühl.
            </p>
            <p>
              Ich unterrichte Italienisch nicht einfach nur, damit Menschen Vokabeln lernen.
              Ich tue es, weil ich sehe, wie viele Menschen sich nach Italien sehnen. Nach dem Klang. Nach Leichtigkeit. Nach Gesprächen ohne Angst. Nach diesem Gefühl, endlich wirklich zu sprechen auch mit Fehlern.
            </p>
            <p className="font-medium text-slate-800">
              Mein Warum ist es, Menschen die Angst zu nehmen. Ihnen zu zeigen, dass Sprache nicht perfekt sein muss, um wunderschön zu sein.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

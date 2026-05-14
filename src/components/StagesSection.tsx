import { motion } from 'framer-motion';

export default function StagesSection() {
  return (
    <section className="py-24 bg-white" id="stages">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-4 text-balance"
          >
            Die italienischen Stufen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Von A0 bis C2 – finde deinen persönlichen Weg zum fließenden Italienisch.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-3xl overflow-hidden shadow-2xl bg-[#f8f9fa]"
        >
          {/* Infographic Image */}
          <img 
            src="/WhatsApp Image 2026-05-14 at 11.11.12.jpeg" 
            alt="Die italienischen Stufen - Von A0 bis C2" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

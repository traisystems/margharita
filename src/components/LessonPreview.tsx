import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, X, PlayCircle } from 'lucide-react';

export default function LessonPreview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-red text-white p-4 rounded-full shadow-xl flex items-center gap-3 hover:bg-brand-red/90 transition-colors group border-2 border-white/20 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-white/20 z-0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 flex items-center gap-2">
          <div className="relative">
            <Headphones className="w-6 h-6" />
            <motion.span 
              className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-brand-red"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
          <span className="font-bold hidden sm:block whitespace-nowrap">🎧 Hörprobe</span>
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-brand-beige w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="bg-brand-red p-6 text-white flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-serif italic">Deine Micro-Lesson</h3>
                  <p className="text-white/80 text-sm mt-1">So hört sich Margherita an</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="relative z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                
                {/* Audio Player Card */}
                <div className="bg-white p-5 rounded-xl shadow-soft mb-8 border border-brand-green/10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-2">
                    <PlayCircle className="w-8 h-8 text-brand-green" />
                  </div>
                  <audio 
                    controls 
                    className="w-full"
                    src="/sprachnachricht_mc.ogg"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>

                {/* Transcript */}
                <div className="text-gray-800">
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-brand-green">Hör dir eine kleine Sequenz aus meinem Microlearning an:</h4>
                  
                  <div className="space-y-3">
                    {/* Line 1 */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-brand-red/30 group">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                        Buongiorno 😊
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Guten Morgen 😊
                      </p>
                    </div>

                    {/* Line 2 */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-brand-red/30 group">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                        Come stai oggi?
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Wie geht es dir heute?
                      </p>
                    </div>

                    {/* Line 3 */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-brand-red/30 group">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                        Oggi andiamo in un piccolo bar italiano ☕
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Heute gehen wir in eine kleine italienische Bar ☕
                      </p>
                    </div>

                    {/* Line 4 */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-brand-red/30 group">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                        Vorrei un caffè e un cornetto, per favore.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Ich hätte gerne einen Kaffee und ein Croissant, bitte.
                      </p>
                    </div>

                    {/* Line 5 */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-brand-red/30 group">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                        Che bello ascoltare l'italiano 🇮🇹
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Wie schön es ist, Italienisch zu hören 🇮🇹
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

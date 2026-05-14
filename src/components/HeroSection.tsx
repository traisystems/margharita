import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from './WhatsAppButton';
import { Heart } from 'lucide-react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalFrames = 125;
  // delay-0.041s = ~24.39 frames per second
  const frameDuration = 41; 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // alpha: false is an optimization
    if (!ctx) return;

    let drawParams = { drawWidth: 0, drawHeight: 0, offsetX: 0, offsetY: 0 };
    let imgW = 1920; // default assumptions
    let imgH = 1080;

    const calculateDrawParams = (width: number, height: number) => {
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = width / height;
      
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }
      return { drawWidth, drawHeight, offsetX, offsetY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawParams = calculateDrawParams(imgW, imgH); 
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/hero_frames/frame_${frameNumber}_delay-0.041s.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          imgW = img.naturalWidth;
          imgH = img.naturalHeight;
          drawParams = calculateDrawParams(imgW, imgH);
          ctx.drawImage(img, drawParams.offsetX, drawParams.offsetY, drawParams.drawWidth, drawParams.drawHeight);
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    let lastDrawnFrame = -1;

    const render = (time: number) => {
      if (!startTime) startTime = time;
      
      const elapsed = time - startTime;
      const targetFrame = Math.floor(elapsed / frameDuration) % totalFrames;

      if (targetFrame !== lastDrawnFrame) {
        const img = images[targetFrame];
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, drawParams.offsetX, drawParams.offsetY, drawParams.drawWidth, drawParams.drawHeight);
          lastDrawnFrame = targetFrame;
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-brand-beige px-4">
      {/* Background Animation Canvas */}
      <canvas 
        ref={canvasRef} 
        className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft relative z-10 border border-white/20">
            <Heart className="w-12 h-12 text-brand-red fill-brand-red" />
          </div>
          <motion.div 
            className="absolute inset-0 bg-brand-red/40 rounded-full z-0 blur-md"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance tracking-tight"
        >
          Sprechen statt Grammatik pauken.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl text-white/90 mb-12 font-serif italic text-balance drop-shadow-md"
        >
          Italienisch lernen mit Herz und Freude <span className="text-brand-red">❤️</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <WhatsAppButton className="w-full sm:w-auto" />
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface WhatsAppButtonProps {
  className?: string;
  text?: string;
  pulse?: boolean;
}

const ItalianFlag = () => (
  <svg width="24" height="18" viewBox="0 0 3 2" className="inline-block ml-1 rounded-[2px] shadow-sm">
    <rect width="1" height="2" x="0" fill="#009246"/>
    <rect width="1" height="2" x="1" fill="#FFFFFF"/>
    <rect width="1" height="2" x="2" fill="#CE2B37"/>
  </svg>
);

export default function WhatsAppButton({ 
  className, 
  text = "Jetzt einfach ‚ITALIEN‘ auf WhatsApp schreiben",
  pulse = true 
}: WhatsAppButtonProps) {
  const WHATSAPP_LINK = "https://wa.me/00491796790530?text=ITALIEN";

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-4 px-8 rounded-full shadow-soft transition-colors duration-300",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={pulse ? {
        boxShadow: ["0px 0px 0px 0px rgba(37, 211, 102, 0.4)", "0px 0px 0px 15px rgba(37, 211, 102, 0)", "0px 0px 0px 0px rgba(37, 211, 102, 0)"]
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
      } : {}}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-lg flex items-center gap-2">
        {text} <ItalianFlag />
      </span>
    </motion.a>
  );
}

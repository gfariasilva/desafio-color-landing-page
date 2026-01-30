import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511951282193"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;

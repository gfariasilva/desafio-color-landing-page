import { MessageCircle, Printer, Key, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Rainbow gradient background */}
      <div className="absolute inset-0 rainbow-gradient opacity-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rainbow-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rainbow-blue/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rainbow-yellow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-rainbow-green animate-pulse" />
            Há 25 anos no mercado
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in [animation-delay:0.1s] opacity-0">
            Oferecendo o melhor para sua{" "}
            <span className="rainbow-text">impressão</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.2s] opacity-0">
            Impressões, cópias, encadernação, plastificação, toners, cartuchos, 
            cópia de chaves e muito mais. Tudo em um só lugar!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in [animation-delay:0.3s] opacity-0">
            <a
              href="https://wa.me/5511951282193"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale pelo WhatsApp
              </Button>
            </a>
            <a href="#servicos">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold text-lg px-8 py-6 border-2"
              >
                Nossos Serviços
              </Button>
            </a>
          </div>

          {/* Service Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in [animation-delay:0.4s] opacity-0">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-rainbow-red/10">
                <Printer className="w-5 h-5 text-rainbow-red" />
              </div>
              <span className="text-sm font-medium">Impressões</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-rainbow-orange/10">
                <Key className="w-5 h-5 text-rainbow-orange" />
              </div>
              <span className="text-sm font-medium">Chaves</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="p-2 rounded-lg bg-rainbow-blue/10">
                <Smartphone className="w-5 h-5 text-rainbow-blue" />
              </div>
              <span className="text-sm font-medium">Celulares</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

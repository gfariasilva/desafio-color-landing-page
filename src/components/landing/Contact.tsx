import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Av. General Ataliba Leonel, 1670", "Carandiru - São Paulo/SP"],
    color: "rainbow-red",
  },
  {
    icon: Phone,
    title: "Telefones",
    lines: ["(11) 2281-7347", "(11) 2337-9218"],
    color: "rainbow-green",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@desafiocolor.com.br"],
    color: "rainbow-blue",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    lines: ["Seg à Sex: 8h às 18h", "Sáb: 8h às 13h"],
    color: "rainbow-purple",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  "rainbow-red": { bg: "bg-rainbow-red/10", text: "text-rainbow-red" },
  "rainbow-green": { bg: "bg-rainbow-green/10", text: "text-rainbow-green" },
  "rainbow-blue": { bg: "bg-rainbow-blue/10", text: "text-rainbow-blue" },
  "rainbow-purple": { bg: "bg-rainbow-purple/10", text: "text-rainbow-purple" },
};

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onde nos <span className="rainbow-text">Encontrar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar ou entre em contato. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => {
              const colors = colorClasses[info.color];
              return (
                <Card
                  key={info.title}
                  className="border-2 border-border hover:border-primary/30 transition-colors animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4`}>
                      <info.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-xl overflow-hidden border-2 border-border shadow-lg animate-fade-in opacity-0 [animation-delay:0.4s]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5024395693693!2d-46.62760572474785!3d-23.51475696010656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5858b5d1d8a7%3A0x8b8b8b8b8b8b8b8b!2sAv.%20Gen.%20Ataliba%20Leonel%2C%201670%20-%20Carandiru%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Desafio Color"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import {
  Printer,
  Palette,
  Key,
  BookOpen,
  Sparkles,
  Tag,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Printer,
    image: "/assets/impressao.png",
    title: "Impressões e Fotocópias",
    description:
      "Impressões coloridas e P&B de alta qualidade em diversos formatos.",
    color: "rainbow-red",
  },
  {
    icon: Palette,
    image: "/assets/toners.png",
    title: "Toners e Cartuchos",
    description:
      "Recargas e vendas de toners e cartuchos para todas as marcas.",
    color: "rainbow-orange",
  },
  {
    icon: Key,
    image: "/assets/chaves.png",
    title: "Cópia de Chaves",
    description: "Cópias de chaves residenciais, automotivas e especiais.",
    color: "rainbow-yellow",
  },
  {
    icon: BookOpen,
    image: "/assets/encadernacao.png",
    title: "Encadernação",
    description:
      "Encadernações profissionais para trabalhos, TCC e documentos.",
    color: "rainbow-green",
  },
  {
    icon: Sparkles,
    image: "/assets/plastificacao.png",
    title: "Plastificação",
    description:
      "Plastificação de documentos para maior durabilidade e proteção.",
    color: "rainbow-blue",
  },
  {
    icon: Tag,
    image: "/assets/personalizacao.png",
    title: "Personalização",
    description: "Carimbos personalizados, etiquetas e materiais customizados.",
    color: "rainbow-purple",
  },
  {
    icon: Smartphone,
    image: "/assets/acessorios.png",
    title: "Acessórios para Celular",
    description: "Capas, películas, carregadores e diversos acessórios.",
    color: "rainbow-red",
  },
  {
    icon: Wrench,
    image: "/assets/servicos.png",
    title: "Serviços para Celular",
    description: "Manutenção e reparos de smartphones e tablets.",
    color: "rainbow-orange",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "rainbow-red": {
    bg: "bg-rainbow-red/10",
    text: "text-rainbow-red",
    border: "border-rainbow-red/30 hover:border-rainbow-red/60",
  },
  "rainbow-orange": {
    bg: "bg-rainbow-orange/10",
    text: "text-rainbow-orange",
    border: "border-rainbow-orange/30 hover:border-rainbow-orange/60",
  },
  "rainbow-yellow": {
    bg: "bg-rainbow-yellow/10",
    text: "text-rainbow-yellow",
    border: "border-rainbow-yellow/30 hover:border-rainbow-yellow/60",
  },
  "rainbow-green": {
    bg: "bg-rainbow-green/10",
    text: "text-rainbow-green",
    border: "border-rainbow-green/30 hover:border-rainbow-green/60",
  },
  "rainbow-blue": {
    bg: "bg-rainbow-blue/10",
    text: "text-rainbow-blue",
    border: "border-rainbow-blue/30 hover:border-rainbow-blue/60",
  },
  "rainbow-purple": {
    bg: "bg-rainbow-purple/10",
    text: "text-rainbow-purple",
    border: "border-rainbow-purple/30 hover:border-rainbow-purple/60",
  },
};

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="rainbow-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender todas as suas
            necessidades de impressão, papelaria e tecnologia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <Card
                key={service.title}
                className={`group overflow-hidden border-2 ${colors.border} bg-card hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in opacity-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 1. Image Header - Outside CardContent to avoid padding */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle overlay to make the icon pop */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <CardContent className="p-6 text-center relative">
                  {/* 2. Floating Icon - Overlapping the image slightly */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} -mt-14 mb-4 relative z-10 shadow-md border-4 border-card group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

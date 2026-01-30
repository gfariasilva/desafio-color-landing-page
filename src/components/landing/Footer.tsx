import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const services = [
  "Impressões e Fotocópias",
  "Toners e Cartuchos",
  "Cópia de Chaves",
  "Encadernação",
  "Plastificação",
  "Acessórios para Celular",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Desafio Color" className="h-24 w-auto mb-4" />
            <p className="text-background/70 text-sm mb-4">
              Há 16 anos oferecendo o melhor em impressões, papelaria e serviços 
              para você e sua empresa.
            </p>
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Carandiru, São Paulo/SP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-background/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+551122817347"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (11) 2281-7347
              </a>
              <a
                href="tel:+551123379218"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (11) 2337-9218
              </a>
              <a
                href="mailto:contato@desafiocolor.com.br"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contato@desafiocolor.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Rainbow divider */}
        <div className="h-1 rainbow-gradient rounded-full mb-8" />

        {/* Copyright */}
        <div className="text-center text-background/60 text-sm">
          <p>© {currentYear} Desafio Color. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

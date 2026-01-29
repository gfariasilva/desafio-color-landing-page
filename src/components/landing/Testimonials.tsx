import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente desde 2018",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Excelente atendimento! Sempre que preciso de impressões urgentes, a Desafio Color me atende com qualidade e rapidez. Recomendo!",
  },
  {
    name: "João Santos",
    role: "Empresário",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "Faço todas as cópias de chaves da minha empresa aqui. Serviço rápido e preço justo. A equipe é muito prestativa.",
  },
  {
    name: "Ana Costa",
    role: "Estudante",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "Encadernei meu TCC aqui e ficou perfeito! A plastificação também ficou excelente. Super indico para outros estudantes.",
  },
  {
    name: "Carlos Oliveira",
    role: "Designer Gráfico",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "A qualidade das impressões é impecável. Os toners que compro aqui duram muito e a cor fica perfeita. Parceria de anos!",
  },
  {
    name: "Fernanda Lima",
    role: "Professora",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    rating: 5,
    text: "Sempre faço minhas apostilas e materiais didáticos na Desafio Color. Preço bom e qualidade excelente. Atendimento nota 10!",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            O que dizem sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos de <span className="rainbow-text">Clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes satisfeitos têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-2 border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-rainbow-yellow text-rainbow-yellow"
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-muted-foreground text-sm flex-1 mb-6">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

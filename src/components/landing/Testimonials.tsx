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
    name: "Renato Mateus",
    role: "Cliente desde 2022",
    rating: 5,
    text: "Utilizamos os produtos da DESAFIO COLOR à 3 anos e em todo esse tempo sempre fomos bem atendidos e os produtos são de muita qualidade. Pode confiar!",
  },
  {
    name: "Rodolpho de Moura Mota",
    role: "Cliente desde 2020",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjW5uK4s-1Y30u8PodSpkOuijcBHchcA9hWgvHFMUoYn_X4oZeOmSg=w90-h90-p-rp-mo-ba2-br100",
    rating: 5,
    text: "Pessoas profissionais, ágeis e competentes, fora que o valor que cabe no bolso.",
  },
  {
    name: "Danilo Bernardo",
    role: "Cliente desde 2021",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVOZY1CttFr7d1HKvgHOonjeQ-23dxFzRMxslqdHrvK3afHGXc=w90-h90-p-rp-mo-br100",
    rating: 5,
    text: "Atendimento rápido, ótimo serviço e valores competitivos.",
  },
  {
    name: "Potiguar Contabilidade",
    role: "Cliente desde 2005",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjU74R8MjIG5ix4KEMiWwsP-GqPZsB284KkGJrahoNxXYB3aqo0=w90-h90-p-rp-mo-ba4-br100",
    rating: 5,
    text: "Utilizamos os serviços da Desafio a pelo menos uns 20 anos! Cartuchos, Sulfite, Carimbos enfim....Excelentes! Produtos de qualidade, comprometimento e preço! Indico a todos. Muito Obrigado!!!",
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
            Veja o que nossos clientes satisfeitos têm a dizer sobre nossos
            serviços.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja{" "}
            <a 
              href="https://www.google.com/search?sca_esv=5cf68b8f0ed15ed3&sxsrf=ANbL-n5ofa25MGP5V8FpHJ36-BoYovCQqQ:1770042523619&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYHJp8OBOGz1ejjf-1y-JNtDepqIhn-_nRX2FG4Jd8Xvvg2VjQY1i6WJozA-H10ucSSxAUGI9GpC-PHA7stwkBGjnfKFafuJ127a5d7QElx4-trLOJhb0A6WT96zMk2SM-B_4ZfhTGjpOjUOJL5aqUUlNuah2gI6HMFALJPe8s7U1bE8YcU_9ex_25q0aoFTXaPW_gbWM_CUkf6-yP9bjFMdSBJhMdxtjvARc6LZt4tb8RzZnw%3D%3D&q=DESAFIO+COLOR+Toner/Cartuchos/Tintas+-+Servi%C3%A7os+de+Copiadora/Encaderna%C3%A7%C3%A3o/Plastifica%C3%A7%C3%A3o/Digitaliza%C3%A7%C3%A3o+-+Carimbos+Reviews&sa=X&ved=2ahUKEwiS_e2egruSAxXvCrkGHSJrGaIQ0bkNegQIJBAF&biw=1528&bih=738&dpr=1.25&aic=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all"
            >
              aqui
            </a>{" "}
            todas as avaliações de clientes!
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
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-2 border-border hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-primary/20 mb-4" />

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-rainbow-yellow text-rainbow-yellow"
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground text-sm flex-1 mb-6">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </div>
                        )}
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

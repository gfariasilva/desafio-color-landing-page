import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryItems = [
  {
    title: "Impressões de Alta Qualidade",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80",
    span: "lg:col-span-2",
  },
  {
    title: "Toners e Cartuchos",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
    span: "",
  },
  {
    title: "Cópia de Chaves",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    span: "",
  },
  {
    title: "Encadernação Profissional",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    span: "lg:col-span-2",
  },
  {
    title: "Acessórios para Celular",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
    span: "",
  },
  {
    title: "Plastificação",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80",
    span: "",
  },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Conheça nossa loja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa <span className="rainbow-text">Galeria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos nossos produtos e serviços em ação.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-xl ${item.span} animate-fade-in opacity-0`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AspectRatio ratio={item.span ? 2 / 1 : 1}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

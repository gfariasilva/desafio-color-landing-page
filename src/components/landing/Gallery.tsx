import { AspectRatio } from "@/components/ui/aspect-ratio";

const galleryItems = [
  {
    title: "Impressões de Alta Qualidade",
    type: "video",
    src: "/impressao.mp4",
    poster:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80",
    span: "lg:row-span-2",
  },
  {
    title: "Cartuchos e Toners",
    type: "video",
    src: "/toner.mp4",
    poster:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80",
    span: "lg:row-span-2",
  },
  {
    title: "Plastificação, Etiquetas e Personalização",
    type: "video",
    src: "/etiqueta.mp4",
    poster:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    span: "lg:row-span-2",
  },
  {
    title: "e Tudo Que Você Precisar!",
    type: "video",
    src: "/diverso.mp4",
    poster:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    span: "lg:row-span-2",
  },
  {
    title: "Venha Nos Conhecer!",
    type: "image",
    src: "/loja.jpg",
    span: "lg:col-span-4",
  },
];

const getRatio = (span: string) => {
  if (span.includes("row-span")) return 9 / 16; // Vertical (Tall)
  if (span.includes("col-span")) return 2 / 1; // Horizontal (Wide)
  return 1; // Square (Default)
};

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
              <AspectRatio ratio={getRatio(item.span)}>
                {/* Conditional Rendering Logic */}
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={item.poster}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  >
                    <source src={item.src} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                {/* Overlay and Text (Applied to both images and videos) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
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

const brands = [
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png" },
  { name: "Brother", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Brother_logo.svg/200px-Brother_logo.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png" },
  { name: "Lexmark", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lexmark_logo.svg/200px-Lexmark_logo.svg.png" },
  { name: "Epson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Epson_logo.svg/200px-Epson_logo.svg.png" },
];

const Brands = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trabalhamos com as melhores
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Marcas <span className="rainbow-text">Parceiras</span>
          </h2>
        </div>

        {/* Brands Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

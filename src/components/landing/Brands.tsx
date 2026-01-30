const brands = [
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png" },
  { name: "Brother", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brother_logo.svg/1280px-Brother_logo.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Samsung_old_logo_before_year_2015.svg/1280px-Samsung_old_logo_before_year_2015.svg.png" },
  { name: "Lexmark", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Lexmark-primary-logo.svg/1280px-Lexmark-primary-logo.svg.png" },
  { name: "Epson", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Epson_logo.svg/960px-Epson_logo.svg.png" },
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

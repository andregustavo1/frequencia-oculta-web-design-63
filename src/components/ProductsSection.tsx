
import React from 'react';

const products = [
  {
    name: "Funkos",
    description: "Personagens da obra em versão colecionável",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Funkos"
  },
  {
    name: "Broches",
    description: "Símbolos da sociedade secreta do livro",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Broches"
  },
  {
    name: "Chaveiros",
    description: "Peças com elementos marcantes da história",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Chaveiros"
  },
  {
    name: "Blusas",
    description: "Vestuário temático com designs exclusivos",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Blusas"
  },
  {
    name: "Canecas",
    description: "Para degustar seu café enquanto mergulha na leitura",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Canecas"
  },
  {
    name: "Quebra-cabeças",
    description: "Desafios visuais baseados na capa e elementos do livro",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Quebra-cabeças"
  },
  {
    name: "Bótons",
    description: "Pequenos itens colecionáveis com símbolos da obra",
    image: "https://placehold.co/300x300/3D0E44/ffffff?text=Bótons"
  }
];

const ProductsSection = () => {
  const getWhatsAppLink = (product: string) => {
    return `https://wa.me/5585985540007?text=Olá! Gostaria de saber mais sobre o produto "${product}" de Frequência Oculta.`;
  };

  return (
    <section id="products" className="section bg-fo-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22none%22 stroke=%22%238A2BE2%22 stroke-width=%220.5%22 width=%2210%22 height=%2210%22 x=%2245%22 y=%2245%22/%3E%3C/svg%3E')] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            Produtos Exclusivos
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Leve o universo de Frequência Oculta para sua coleção
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className={`glass-effect rounded-lg overflow-hidden transition-all duration-500 opacity-0 animate-fade-in`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fo-dark to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-white/70 mb-4">{product.description}</p>
                <a 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fo-accent hover:text-white transition-colors duration-300 text-sm flex items-center justify-center md:justify-start"
                >
                  Saiba mais
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

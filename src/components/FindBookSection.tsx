
import React from 'react';

const platforms = [
  { 
    name: "Uiclap", 
    type: "Livro Físico", 
    logo: "https://placehold.co/200x80/3D0E44/ffffff?text=Uiclap",
    link: "https://loja.uiclap.com/titulo/ua86957/" 
  },
  { 
    name: "Amazon", 
    type: "Livro Digital", 
    logo: "https://placehold.co/200x80/3D0E44/ffffff?text=Amazon",
    link: "https://a.co/d/iX3FfcQ" 
  }
];

const FindBookSection = () => {
  return (
    <section id="where" className="section bg-gradient-to-b from-fo-dark via-fo-purple-dark to-fo-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            Onde Encontrar
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Disponível nas maiores plataformas e livrarias de todo o Brasil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in-delay-1">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className="glass-effect p-6 rounded-lg flex flex-col md:flex-row items-center gap-6"
              >
                <img 
                  src={platform.logo} 
                  alt={`Logo ${platform.name}`} 
                  className="w-32 h-12 object-contain" 
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">{platform.type}</h3>
                  <p className="text-white/80 mb-4">Disponível na plataforma {platform.name}</p>
                  <a 
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fo-accent hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    Adquirir
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
            
            <div className="glass-effect p-6 rounded-lg text-center md:text-left opacity-0 animate-fade-in-delay-2">
              <h3 className="text-xl font-bold mb-2">Livrarias</h3>
              <p className="text-white/80">
                Consulte disponibilidade em livrarias de todo o Brasil.
              </p>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in-delay-2">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-fo-accent/20 to-transparent blur-xl animate-pulse-light" />
            <div className="glass-effect p-8 rounded-lg relative">
              <div className="bg-fo-accent/10 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-2 text-center">Destaque</h3>
                <p className="text-white/80 text-center">
                  Frequência Oculta estará presente na
                </p>
                <p className="text-2xl font-bold text-center mt-2 text-fo-accent">
                  Bienal do Livro
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://placehold.co/500x300/3D0E44/ffffff?text=Mockup+Livro" 
                  alt="Mockup do livro Frequência Oculta" 
                  className="w-full rounded-lg shadow-lg hover-scale" 
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-fo-accent/30 rounded-full blur-2xl animate-pulse-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindBookSection;

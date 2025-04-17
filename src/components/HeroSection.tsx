
import React from 'react';

const HeroSection = () => {
  const createWaveText = (text: string) => {
    return (
      <span className="wave-text">
        {text.split('').map((letter, index) => (
          <span 
            key={index} 
            className="wave-letter" 
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  };
  
  const getWhatsAppLink = () => {
    return `https://wa.me/5585985540007?text=Olá! Gostaria de adquirir o livro Frequência Oculta.`;
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-fo-dark to-fo-purple-dark opacity-90 z-0" />
      
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-fo-accent/20"
            style={{
              width: `${Math.random() * 30 + 20}%`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              transform: `rotate(${Math.random() * 360}deg)`,
              filter: `blur(${Math.random() * 2}px)`
            }}
          />
        ))}
      </div>
      
      {/* Frequency wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-around">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="w-1 bg-fo-accent/30 rounded-t-full animate-wave"
            style={{
              height: `${Math.random() * 60 + 20}%`,
              animationDelay: `${Math.random() * 1}s`,
              animationDuration: `${Math.random() * 3 + 1}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="text-center md:text-left space-y-6 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white block mb-2">
              {createWaveText('Frequência')}
            </span>
            <span className="text-fo-accent block">
              {createWaveText('Oculta')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 opacity-0 animate-fade-in-delay-1">
            Os segredos de São Paulo aguardam nas sombras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-2">
            <a 
              href="#synopsis" 
              className="bg-fo-purple border-2 border-fo-accent text-white px-8 py-3 rounded-md font-montserrat font-medium transition-all duration-300 hover:bg-fo-accent"
            >
              Conheça a História
            </a>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer" 
              className="cta-button"
            >
              Compre Agora
            </a>
          </div>
        </div>
        
        <div className="relative opacity-0 animate-fade-in-delay-3">
          <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-fo-accent/20 to-transparent blur-xl animate-pulse-light" />
          <img 
            src="https://placehold.co/400x600/3D0E44/ffffff?text=Frequência+Oculta" 
            alt="Capa do Livro Frequência Oculta" 
            className="w-full max-w-[350px] mx-auto rounded-md shadow-2xl relative z-10 hover-scale hover-glow"
          />
          <div className="absolute inset-0 bg-fo-accent/10 animate-pulse opacity-75 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

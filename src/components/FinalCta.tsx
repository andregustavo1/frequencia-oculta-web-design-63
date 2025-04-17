
import React from 'react';

const FinalCta = () => {
  const getWhatsAppLink = () => {
    return `https://wa.me/5585985540007?text=Olá! Gostaria de adquirir o livro Frequência Oculta.`;
  };

  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fo-purple-dark to-fo-dark opacity-90 z-0" />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z%22 fill=%22%238A2BE2%22 fill-opacity=%220.1%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            Descubra os Segredos da Frequência Oculta
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Uma conspiração aguarda por você nas páginas deste livro
          </p>
          
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button text-lg px-10 py-4"
          >
            Adquirir Agora
          </a>
        </div>
        
        <div className="mt-16 relative max-w-lg mx-auto opacity-0 animate-fade-in-delay-2">
          <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-fo-accent/30 to-transparent blur-xl animate-pulse-light" />
          <img 
            src="https://placehold.co/600x400/3D0E44/ffffff?text=Frequência+Oculta" 
            alt="Mockup do livro Frequência Oculta" 
            className="w-full rounded-lg shadow-2xl relative z-10 hover-scale hover-glow"
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCta;

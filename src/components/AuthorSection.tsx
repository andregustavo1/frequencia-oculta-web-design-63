
import React from 'react';

const AuthorSection = () => {
  return (
    <section id="author" className="section bg-fo-dark relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill=%22%238A2BE2%22 fill-opacity=%220.05%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 opacity-0 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-shadow md:text-left text-center">
              A Autora
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Idalina Gurjão é uma talentosa escritora que tece histórias envolventes que misturam conspiração, suspense e elementos do cotidiano moderno.
              </p>
              <p className="text-lg text-white/80 leading-relaxed opacity-0 animate-fade-in-delay-1">
                Com sua visão única e capacidade de criar personagens complexos, ela nos transporta para uma São Paulo desconhecida, revelando segredos ocultos por detrás da fachada urbana.
              </p>
              
              <blockquote className="text-xl italic text-white/90 border-l-4 border-fo-accent pl-4 my-8 opacity-0 animate-fade-in-delay-2">
                "A conspiração é apenas o início da jornada. O verdadeiro mistério está naquilo que não conseguimos ver."
                <footer className="text-right text-fo-accent mt-2 text-lg">
                  — Idalina Gurjão
                </footer>
              </blockquote>
              
              <div className="opacity-0 animate-fade-in-delay-3">
                <a 
                  href="https://uiclap.bio/IdalinaGurjao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fo-accent hover:text-white transition-colors duration-300 inline-flex items-center"
                >
                  Conheça mais sobre a autora
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;

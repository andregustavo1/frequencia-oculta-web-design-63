
import React from 'react';

const SynopsisSection = () => {
  return (
    <section id="synopsis" className="section bg-gradient-to-b from-fo-dark via-fo-purple-dark to-fo-dark">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-shadow opacity-0 animate-fade-in">
          A História
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-delay-1">
            <p className="text-lg text-white/80 leading-relaxed">
              Em uma São Paulo onde o poder se esconde nas sombras dos arranha-céus, uma sociedade secreta emerge atraindo quatro desconhecidos: uma jornalista obstinada, um hacker endividado, uma executiva ambiciosa e um artista que desafia limites.
            </p>
            <p className="text-lg text-white/80 leading-relaxed opacity-0 animate-fade-in-delay-2">
              Unidos por escolhas que pareciam coincidência, conforme mergulhavam nos segredos da enigmática Mansão Weiss, descobrem que tudo foi meticulosamente orquestrado desde o início.
            </p>
            <p className="text-lg text-white/80 leading-relaxed opacity-0 animate-fade-in-delay-3">
              Agora, precisam decidir: expor a conspiração ou se render ao poder que espreita na frequência oculta.
            </p>
          </div>
          
          <div className="relative opacity-0 animate-fade-in-delay-2">
            <div className="glass-effect p-8 rounded-lg relative z-10">
              <blockquote className="text-xl italic text-white/90 font-montserrat">
                "Às vezes, o que permanece oculto não é uma escolha, mas uma frequência
                que poucos conseguem sintonizar."
                <footer className="text-right text-fo-accent mt-4 text-lg">
                  — Frequência Oculta
                </footer>
              </blockquote>
            </div>
            
            {/* Character silhouettes */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-fo-accent/10 rounded-full blur-2xl animate-pulse-light" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-fo-accent/10 rounded-full blur-2xl animate-pulse-light" />
          </div>
        </div>
        
        {/* Character silhouettes */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in-delay-4">
          {[
            "Jornalista Obstinada",
            "Hacker Endividado",
            "Executiva Ambiciosa",
            "Artista Desafiador"
          ].map((character, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-b from-fo-purple to-fo-accent rounded-full mx-auto mb-4 opacity-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-fo-dark opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl text-white/70">?</span>
                </div>
              </div>
              <p className="text-sm text-white/80">{character}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SynopsisSection;

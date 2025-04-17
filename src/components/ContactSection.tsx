
import React from 'react';

const ContactSection = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "E-mail",
      value: "frequenciaocultabr@gmail.com",
      link: "mailto:frequenciaocultabr@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Telefone",
      value: "(85) 98554-0007",
      link: "https://wa.me/5585985540007"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="currentColor" strokeWidth="2"/>
          <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: "Instagram",
      value: "@frequenciaoculta",
      link: "https://instagram.com/frequenciaoculta"
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 12a2 2 0 114 0 2 2 0 01-4 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 8l6 8M14 8l-6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "TikTok",
      value: "@frequencia.oculta",
      link: "https://tiktok.com/@frequencia.oculta"
    }
  ];

  return (
    <section id="contact" className="section bg-fo-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            Entre em Contato
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fale com a autora ou solicite informações sobre eventos e produtos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 opacity-0 animate-fade-in-delay-1">
            {contacts.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="glass-effect p-6 rounded-lg flex items-center space-x-4 transition-transform hover:scale-105 hover:shadow-lg hover:shadow-fo-accent/10"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-fo-purple text-white">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{contact.label}</h3>
                  <p className="text-white/80">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="relative opacity-0 animate-fade-in-delay-2">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-fo-accent/20 to-transparent blur-xl animate-pulse-light" />
            <div className="glass-effect p-8 rounded-lg relative">
              <h3 className="text-xl font-bold mb-6">Frequências que conectam</h3>
              <p className="text-white/80 mb-8">
                Temos o prazer de receber seu contato e responder a todas as suas dúvidas sobre o universo de Frequência Oculta. Estamos ansiosos para compartilhar essa jornada com você.
              </p>
              
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border-2 border-fo-accent/30 animate-pulse" />
                  <div className="absolute inset-4 rounded-full border-2 border-fo-accent/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="absolute inset-8 rounded-full border-2 border-fo-accent/10 animate-pulse" style={{ animationDelay: "1s" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl text-fo-accent">F.O.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

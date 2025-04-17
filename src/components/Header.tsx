
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'synopsis', label: 'Sinopse' },
    { id: 'products', label: 'Produtos' },
    { id: 'where', label: 'Onde Encontrar' },
    { id: 'author', label: 'Autora' },
    { id: 'reviews', label: 'Resenhas' },
    { id: 'contact', label: 'Contato' },
  ];
  
  const getWhatsAppLink = () => {
    return `https://wa.me/5585985540007?text=Olá! Gostaria de adquirir o livro Frequência Oculta.`;
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glass-effect' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            <span className="text-shadow inline-block animate-pulse-light">Frequência</span> 
            <span className="text-fo-accent"> Oculta</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'font-montserrat text-sm transition-colors duration-300 relative hover:text-fo-accent',
                activeSection === item.id 
                  ? 'text-fo-accent font-medium' 
                  : 'text-white/80'
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-fo-accent mt-0.5 animate-fade-in" />
              )}
            </a>
          ))}
        </nav>
        
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button text-sm"
        >
          Adquira Agora
        </a>
      </div>
    </header>
  );
};

export default Header;

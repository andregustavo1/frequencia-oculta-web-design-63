
import React, { useState } from 'react';

const reviews = [
  {
    quote: "Uma obra que mistura o cotidiano urbano com elementos de conspiração de forma brilhante. Idalina criou personagens complexos que nos fazem questionar o que é real.",
    author: "Clube do Leitor",
    rating: 5,
    link: "https://clubedoleitor.net.br/frequencia-oculta/"
  },
  {
    quote: "Frequência Oculta nos transporta para uma São Paulo cheia de segredos. A narrativa é envolvente e os personagens são memoráveis.",
    author: "Leitor Assíduo",
    rating: 4,
    link: null
  },
  {
    quote: "Uma história que mistura suspense, conspiração e elementos urbanos com maestria. Idalina Gurjão é uma autora a ser acompanhada.",
    author: "Resenhas Literárias",
    rating: 5,
    link: null
  }
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  
  const goToNextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="section bg-gradient-to-b from-fo-dark via-fo-purple-dark to-fo-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">
            O Que Estão Dizendo
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Confira o que os leitores acham de Frequência Oculta
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="glass-effect p-8 md:p-12 rounded-lg relative">
            <div className="text-fo-accent text-6xl font-serif absolute top-6 left-8 opacity-30">"</div>
            
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-xl text-white/90 italic relative z-10 mb-8">
                {reviews[activeIndex].quote}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">{reviews[activeIndex].author}</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-fo-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {reviews[activeIndex].link && (
                  <a 
                    href={reviews[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fo-accent hover:text-white transition-colors duration-300 inline-flex items-center"
                  >
                    Leia a resenha completa
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            <div className="text-fo-accent text-6xl font-serif absolute bottom-6 right-8 opacity-30">"</div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-fo-accent' : 'bg-white/30'
                }`}
                aria-label={`Ver resenha ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToPrevReview}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-fo-purple border border-fo-accent/50 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Resenha anterior"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextReview}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-fo-purple border border-fo-accent/50 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Próxima resenha"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

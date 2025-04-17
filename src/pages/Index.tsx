
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SynopsisSection from '@/components/SynopsisSection';
import ProductsSection from '@/components/ProductsSection';
import FindBookSection from '@/components/FindBookSection';
import AuthorSection from '@/components/AuthorSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Set document title and language
    document.title = "Frequência Oculta | Livro de Idalina Gurjão";
    document.documentElement.lang = "pt-BR";
    
    // Apply scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-fo-dark text-white relative">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Progress bar */}
      <ProgressBar />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Header */}
      <Header />
      
      <main>
        {/* Hero section */}
        <HeroSection />
        
        {/* Synopsis section */}
        <SynopsisSection />
        
        {/* Products section */}
        <ProductsSection />
        
        {/* Where to find section */}
        <FindBookSection />
        
        {/* Author section */}
        <AuthorSection />
        
        {/* Reviews section */}
        <ReviewsSection />
        
        {/* Contact section */}
        <ContactSection />
        
        {/* Final CTA section */}
        <FinalCta />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

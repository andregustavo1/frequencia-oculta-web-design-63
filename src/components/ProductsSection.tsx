
import React from 'react';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  return (
    <section className="py-16 bg-background px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2">
          <img 
            src="/lovable-uploads/1d4961a0-6cc3-48db-8a3e-3991f9de97fe.png" 
            alt="Lançamento de Livro - Frequência Oculta na Bienal do Livro" 
            className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Destaque: Lançamento na Bienal do Livro
          </h2>
          <p className="text-muted-foreground mb-6">
            Frequência Oculta estará presente na XV Bienal Internacional do Livro do Ceará
          </p>
          <div className="space-y-4">
            <p className="font-semibold">
              Data: 06 de Abril, 15:00
            </p>
            <p className="text-muted-foreground">
              Local: Centro de Eventos do Ceará (Bienal do Livro)
            </p>
            <Button className="w-full md:w-auto">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;


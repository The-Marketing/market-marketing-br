import React from 'react';

const SectionCustomSolutions = () => {
  return (
    <section id="customSolutions" className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Soluções Personalizadas para Seu Negócio</h2>
      <p className="text-lg mb-6">
        Entendemos as necessidades do seu negócio e criamos aplicações sob medida que atendem perfeitamente suas exigências.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Flexibilidade</h3>
          <p>Ajuste a aplicação de acordo com as mudanças e necessidades do mercado.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Soluções Exclusivas</h3>
          <p>Criamos soluções que se alinham perfeitamente aos objetivos da sua empresa.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionCustomSolutions;

import React from 'react';

const SectionSEOOptimized = () => {
  return (
    <section id="seoOptimized" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">SEO Otimizado para Google</h2>
      <p className="text-lg mb-6">
        As aplicações criadas com Next.js são otimizadas para SEO desde o início, garantindo que seu conteúdo seja facilmente indexado pelos motores de busca.
      </p>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Indexação Rápida</h3>
        <p>Com a renderização do lado do servidor, suas páginas são indexadas instantaneamente, aumentando sua visibilidade no Google.</p>
      </div>
    </section>
  );
};

export default SectionSEOOptimized;

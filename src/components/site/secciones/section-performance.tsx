import React from 'react';

const SectionPerformance = () => {
  return (
    <section id="performance" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Performance Imbatível</h2>
      <p className="text-lg mb-6">
        Next.js entrega uma performance excepcional com páginas carregando rapidamente, melhorando a experiência do usuário e a taxa de conversão.
      </p>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Carregamento Instantâneo</h3>
        <p>Com a renderização do lado do servidor e otimização de recursos, suas páginas carregam em um piscar de olhos.</p>
      </div>
    </section>
  );
};

export default SectionPerformance;

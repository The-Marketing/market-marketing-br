import React from 'react';

const SectionMobileFriendly = () => {
  return (
    <section id="mobileFriendly" className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Experiência Móvel Incrível</h2>
      <p className="text-lg mb-6">
        Com Next.js, todas as suas aplicações serão perfeitamente responsivas, garantindo uma experiência de qualidade em dispositivos móveis.
      </p>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Design Responsivo</h3>
        <p>Suas páginas se ajustam automaticamente a qualquer tela, garantindo acessibilidade em todos os dispositivos.</p>
      </div>
    </section>
  );
};

export default SectionMobileFriendly;

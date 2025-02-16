import React from 'react';

const SectionWhyNextJS = () => {
  return (
    <section id="whyNextJS" className="bg-gray-800 text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Por que escolher Next.js?</h2>
      <p className="text-lg mb-6">Next.js é um framework React altamente otimizado para performance e SEO.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Desempenho excepcional</h3>
          <p>Com o Next.js, suas páginas são pré-renderizadas e carregam instantaneamente para o usuário.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">SEO Integrado</h3>
          <p>Next.js oferece suporte nativo para SEO com URLs amigáveis e otimização automática de imagens.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Escalabilidade</h3>
          <p>Construir aplicações escaláveis nunca foi tão fácil. Com Next.js, você pode crescer sem limites.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionWhyNextJS;

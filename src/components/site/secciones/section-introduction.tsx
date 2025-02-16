import React from 'react';

const SectionIntroduction = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Desenvolvimento de Aplicações Web Sob Medida
        </h2>
        <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1.5s">
          Crie soluções web poderosas com Next.js, otimizadas para SEO e com performance de alto nível.
        </p>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Com Next.js, sua aplicação será rápida, escalável e segura. Além disso, entregamos uma experiência de usuário envolvente com design moderno e funcionalidades de ponta.
        </p>
        
        {/* Botón "Contratar Agora" */}
        <div className="animate__animated animate__fadeIn animate__delay-2.5s">
          <a
            href="#contato" // Aquí agregas el enlace donde quieres que el usuario sea dirigido
            className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:text-gray-900"
          >
            Contratar Agora
          </a>
        </div>
      </div>

      {/* Animación de fondo suave con movimiento */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-30 animate__animated animate__fadeIn animate__delay-1s"></div>
    </section>
  );
};

export default SectionIntroduction;

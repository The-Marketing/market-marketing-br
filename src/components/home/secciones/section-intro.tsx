'use client'
const SectionIntro = () => {

  return (
    <section 
      className="flex flex-col items-center justify-center py-32 text-center bg-gradient-to-r from-black to-gray-900 relative overflow-hidden"
    >
      {/* Bordes superiores e inferiores */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-pulse"></div>

      {/* Título con animación fade-in */}
      <h1 className="text-6xl font-extrabold text-transparent animate-pulse border-spacing-3 bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-gray-700 mb-6 opacity-1 delay-300 animate-fadeIn">
        Bem-vindo ao THE MARKETING
      </h1>

      {/* Descripción con animación fade-in */}
      <p className="text-2xl mb-6 text-gray-300 max-w-2xl mx-auto opacity-1 animate-fadeIn delay-300">
        Aumente suas vendas com estratégias digitais de ponta em Meta, Ads, TikTok, X e mais! Conquiste o mercado agora!
      </p>

      {/* Botón con animación hover */}
      <button className="py-4 px-8 rounded-lg bg-gradient-to-r from-gray-600 to-gray-400 text-lg font-semibold text-gray-300 border-gray-300 shadow-lg transform transition-all duration-600 hover:scale-105 hover:animate-none animate-pulse hover:bg-gray-800 hover:text-white">
        Saiba Mais
      </button>
    </section>
  );
};

export default SectionIntro;

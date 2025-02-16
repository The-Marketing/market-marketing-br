import React from 'react';

import {
  animated,
  useSpring,
} from 'react-spring';

const Testimonials = () => {
    const hoverScale = useSpring({ scale: 1, from: { scale: 0.95 }, config: { tension: 200, friction: 10 } });

  return (
    <section className="py-32 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">O que nossos clientes dizem</h2>
        <div className="flex flex-wrap gap-12 justify-center">
          {/* Testemunho 1 */}
          <animated.div
            className="bg-gray-700 rounded-lg p-10 shadow-lg transform transition duration-300 hover:scale-105 max-w-xs"
            style={hoverScale} // Apply hover animation
          >
            <p className="text-lg text-gray-300 mb-6">O THE MARKETING transformou minha presença online e impulsionou minhas vendas em pouco tempo!</p>
            <h3 className="font-semibold text-lg">João Silva</h3>
            <p className="text-gray-400">CEO da Silva Tech</p>
          </animated.div>

          {/* Testemunho 2 */}
          <animated.div
            className="bg-gray-700 rounded-lg p-10 shadow-lg transform transition duration-300 hover:scale-105 max-w-xs"
            style={hoverScale} // Apply hover animation
          >
            <p className="text-lg text-gray-300 mb-6">Graças ao THE MARKETING, aumentei a visibilidade do meu negócio e agora sou referência em meu segmento.</p>
            <h3 className="font-semibold text-lg">Maria Souza</h3>
            <p className="text-gray-400">Fundadora da Maria Fashion</p>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';

import Image from 'next/image';

const SectionModernDesign = () => {
  return (
    <section id="modernDesign" className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-20 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Design Moderno e Responsivo</h2>
      <p className="text-lg mb-6">
        Cada aplicativo criado com Next.js é otimizado para oferecer uma experiência de usuário excepcional em qualquer dispositivo, com design responsivo.
      </p>
      <div className="carousel-container bg-gray-900 p-6 rounded-lg shadow-lg">
        {/* Aqui você pode adicionar um carrossel de imagens */}
        <Image src="image1.jpg" alt="Design Moderno 1" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default SectionModernDesign;

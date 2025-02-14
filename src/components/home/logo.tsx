import React from 'react';
import Image from 'next/image';
import logo from '@/public/img/tm.png';  // Importa la imagen como un objeto

const Logo = () => {
  return (
    <Image
      src={logo}  // Usamos la variable `logo`, que contiene el objeto de la imagen
      alt="THE MARKETING Logo"
      width={130}
      height={80}      
    />
  );
};

export default Logo;

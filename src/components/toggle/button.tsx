// components/ui/button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  theme: 'light' | 'dark'; // Agregamos la propiedad para manejar el tema
}

export const Button = ({ children, className, theme }: ButtonProps) => {
  return (
    <button
      className={`
        w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-in-out transform
        ${theme === 'light' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-800 text-black hover:bg-gray-700 hover:text-white'}
        ${className}
        hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500
      `}
    >
      {children}
    </button>
  );
};

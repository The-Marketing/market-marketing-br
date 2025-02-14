'use client'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/home/logo'; // Importamos el logo

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700  py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Columna 1: Redes Sociales */}
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white h-6 w-6 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-white h-6 w-6 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-white h-6 w-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-white h-6 w-6 hover:text-blue-700 transition-colors" />
            </a>
          </div>

          {/* Columna 2: THE MARKETING */}
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">THE MARKETING</h2>
          </div>

          {/* Columna 3: Logo */}
          <div className="flex justify-center">
            <Logo /> {/* Suponiendo que el logo es un componente o una imagen */}
          </div>
        </div>
      </div>
    </footer>
  );
}

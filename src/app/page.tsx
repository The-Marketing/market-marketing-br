"use client";
import { useEffect, useState } from "react";
import { GitPullRequest, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePhrase, setActivePhrase] = useState(0); // Estado para manejar las frases

  const slides = [
    { id: 1, title: "🚀 Soluções Inovadoras", backgroundColor: "bg-[var(--card)]" },
    {
      id: 2,
      title: "📈 Marketing Inteligente",
      backgroundColor: "bg-[var(--secondary)]",
    },
    {
      id: 3,
      title: "📊 Crescimento do Seu Negócio",
      backgroundColor: "bg-[var(--highlight)]",
    },
  ];

  const phrases = [
    "Bem-vindo ao sucesso..!",
    "Conquiste seu espaço no mercado digital",
    "Cresça de forma inteligente e eficiente",
    "Entre agora e transforme seu negócio.",
  ];

  // Autoplay del carrossel, ahora con un intervalo de 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Cambio de frase con intervalo de 7 segundos
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 7000);

    return () => clearInterval(phraseInterval);
  }, [phrases.length]);

  const listItems = [
    "Campanhas digitais",
    "Meta Ads, TikTok & X",
    "Aplicações web à medida",
    "Pagamentos digitais, envios online",
    "Marketing e publicidade",
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-[var(--background)] to-[var(--secondary)] overflow-hidden">
      {/* Fondo en movimiento con degradado animado */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[var(--background)] to-[var(--secondary)] opacity-90 animate-fadeIn"></div>

      <div className="flex flex-col items-center gap-8 w-full max-w-7xl z-10 relative">
        {/* Header */}
        <header className="flex flex-col gap-6 items-center justify-center w-full py-8 animate-fadeIn delay-200">
          <div className="flex items-center gap-4 animate-fadeIn delay-200">
            <Logo />
            <h1 className="text-6xl font-extrabold text-[var(--foreground)] drop-shadow-2xl transform hover:scale-110 transition duration-300 cursor-default animate-fadeIn delay-200">
              THE MARKETING
            </h1>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <div className="flex flex-col md:flex-row gap-8 w-full animate-fadeIn delay-300">
          {/* Carrossel Animado */}
          <div className="flex-1 relative h-80 overflow-hidden rounded-lg shadow-xl animate-fadeIn">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                } ${slide.backgroundColor} flex items-center justify-center text-[var(--foreground)] text-3xl font-semibold shadow-xl transform transition duration-300`}
              >
                <h2 className="text-4xl font-bold animate-fadeIn delay-300">
                  {slide.title}
                </h2>
              </div>
            ))}
          </div>

          {/* Coluna 2 - Botões e Configuração */}
          <div className="flex-1 flex flex-col justify-between space-y-6 animate-fadeIn delay-300 h-full">
            {/* Fila 1 - Frases */}
            <div className="text-2xl font-semibold text-white text-center drop-shadow-lg">
              <div className="text-center">
                {phrases[activePhrase].split("").map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block opacity-0 transition-opacity duration-300 delay-${index * 50} opacity-100`}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>

            {/* Fila 2 - Lista de items */}
            <div className="text-sm text-white space-y-3 mt-6">
              {listItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-xl">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Fila 3 - Botones, que ahora estará al fondo */}
            <div className="flex flex-col gap-4 w-full mt-auto">
              {/* Botón para iniciar sesión */}
              <Button className="w-full py-5 text-xl transform transition duration-300 ease-in-out hover:scale-110 hover:bg-red-800 hover:text-red-300 text-[var(--foreground)] shadow-xl hover:shadow-2xl">
                <Mail className="mr-2 text-red-300 " /> Iniciar sessão com Gmail
              </Button>

              {/* Enlace para entrar como invitado */}
              <Link
                href="/marketing"
                className="flex items-center text-[var(--muted-foreground)] hover:underline transition duration-300 ease-in-out hover:text-blue-300 text-lg py-3"
              >
                <GitPullRequest className="mr-2 text-blue-300" />
                Entrar como convidado
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

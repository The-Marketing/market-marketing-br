'use client'
import { useSpring, animated } from 'react-spring';  // Import react-spring
import { Instagram, Chrome, TrendingUp, DollarSign, Package } from 'lucide-react';

export default function HomePage() {
  // Define animations using react-spring
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });
  const hoverScale = useSpring({ scale: 1, from: { scale: 0.95 }, config: { tension: 200, friction: 10 } });
  const buttonHover = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.95)' }, config: { tension: 200, friction: 15 } });

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Sección 1: Introdução */}
      <section className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6">
          Bem-vindo ao THE MARKETING
        </h1>
        <p className="text-2xl mb-6">
          Aumente suas vendas com estratégias digitais de ponta em Meta, Ads, TikTok, X e mais! Conquiste o mercado agora!
        </p>
        <animated.button
          className="py-4 px-8 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-lg font-semibold hover:scale-105 transition-all duration-300"
          style={buttonHover} // Apply hover animation
        >
          Saiba Mais
        </animated.button>
      </section>

      {/* Sección 2: O Que Fazemos */}
      <section className="py-32 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">O Que Fazemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <animated.div
              className="bg-gray-700 rounded-lg p-10 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={hoverScale} // Apply hover animation
            >
              <Instagram className="h-14 w-14 mx-auto mb-6 text-pink-500" />
              <h3 className="text-2xl font-semibold mb-2">Campanhas no Instagram</h3>
              <p className="text-gray-300 mb-4">Criação de campanhas direcionadas para maximizar seu alcance e engajamento na maior rede social do mundo.</p>
              <p className="text-gray-400 text-sm mb-6">Seu público está no Instagram. Vamos te conectar com ele.</p>
              <animated.button
                className="py-2 px-6 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
                style={buttonHover}
              >
                Comece Agora
              </animated.button>
            </animated.div>

            {/* Card 2 */}
            <animated.div
              className="bg-gray-700 rounded-lg p-10 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={hoverScale} // Apply hover animation
            >
              <Chrome className="h-14 w-14 mx-auto mb-6 text-blue-500" />
              <h3 className="text-2xl font-semibold mb-2">Google Ads</h3>
              <p className="text-gray-300 mb-4">Desenvolvemos campanhas no Google Ads para trazer tráfego qualificado para seu negócio.</p>
              <p className="text-gray-400 text-sm mb-6">Atraia o público certo e converta visitas em vendas de maneira eficaz.</p>
              <animated.button
                className="py-2 px-6 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                style={buttonHover}
              >
                Comece Agora
              </animated.button>
            </animated.div>

            {/* Card 3 */}
            <animated.div
              className="bg-gray-700 rounded-lg p-10 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              style={hoverScale} // Apply hover animation
            >
              <TrendingUp className="h-14 w-14 mx-auto mb-6 text-yellow-500" />
              <h3 className="text-2xl font-semibold mb-2">Crescimento de Negócios</h3>
              <p className="text-gray-300 mb-4">Estratégias de crescimento digital com foco em resultados reais e aumento das vendas.</p>
              <p className="text-gray-400 text-sm mb-6">Vamos elevar o seu negócio ao próximo nível.</p>
              <animated.button
                className="py-2 px-6 rounded-lg bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300"
                style={buttonHover}
              >
                Comece Agora
              </animated.button>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Sección 3: Serviços */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Nossos Serviços</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Item de serviço */}
            <div className="bg-gray-700 rounded-lg p-10 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
              <Package className="h-14 w-14 mb-6 text-green-400 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Desenvolvimento de Aplicações Web</h3>
              <p className="text-gray-300 mb-4">Criamos soluções digitais personalizadas para atender às suas necessidades específicas.</p>
              <p className="text-gray-400 text-sm mb-6">Transforme suas ideias em soluções inovadoras e escaláveis.</p>
              <animated.button
                className="py-2 px-6 rounded-lg bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition duration-300"
                style={buttonHover}
              >
                Comece Agora
              </animated.button>
            </div>

            <div className="bg-gray-700 rounded-lg p-10 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
              <DollarSign className="h-14 w-14 mb-6 text-orange-400 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Vendas Digitais</h3>
              <p className="text-gray-300 mb-4">Aumente suas vendas através de estratégias digitais avançadas de marketing.</p>
              <p className="text-gray-400 text-sm mb-6">Multiplique suas vendas com campanhas otimizadas para conversões.</p>
              <animated.button
                className="py-2 px-6 rounded-lg bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300"
                style={buttonHover}
              >
                Comece Agora
              </animated.button>
            </div>

            <div className="bg-gray-700 rounded-lg p-10 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105">
              <TrendingUp className="h-14 w-14 mb-6 text-teal-400 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Campanhas de Meta & TikTok</h3>
              <p className="text-gray-300 mb-4">Promova sua marca nas principais plataformas de mídia social, com campanhas de alto impacto.</p>
              <p className="text-gray-400 text-sm mb-6">Domine as redes sociais com anúncios criativos e envolventes.</p>
              <animated.button
                className="py-2 px-6 rounded-lg bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition duration-300"
                style={buttonHover}
              >
                Comece Agora
              </animated.button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Testemunhos */}
      <section className="py-32 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">O que nossos clientes dizem</h2>
          <div className="flex flex-wrap gap-12 justify-center">
            {/* Testemunho 1 */}
            <animated.div
              className="bg-gray-700 rounded-lg p-10 shadow-lg transform transition duration-300 hover:scale-105 max-w-xs"
              style={hoverScale} // Apply hover animation
            >
              <p className="text-lg text-gray-300 mb-6">"O THE MARKETING transformou minha presença online e impulsionou minhas vendas em pouco tempo!"</p>
              <h3 className="font-semibold text-lg">João Silva</h3>
              <p className="text-gray-400">CEO da Silva Tech</p>
            </animated.div>

            {/* Testemunho 2 */}
            <animated.div
              className="bg-gray-700 rounded-lg p-10 shadow-lg transform transition duration-300 hover:scale-105 max-w-xs"
              style={hoverScale} // Apply hover animation
            >
              <p className="text-lg text-gray-300 mb-6">"Graças ao THE MARKETING, aumentei a visibilidade do meu negócio e agora sou referência em meu segmento."</p>
              <h3 className="font-semibold text-lg">Maria Souza</h3>
              <p className="text-gray-400">Fundadora da Maria Fashion</p>
            </animated.div>
          </div>
        </div>
      </section>

      {/* Sección 5: Tabela de Preços */}
      <section className="py-32 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Tabela de Preços</h2>
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-700 text-gray-400">
                  <th className="py-3 px-6 text-left">Serviço</th>
                  <th className="py-3 px-6 text-left">Descrição</th>
                  <th className="py-3 px-6 text-left">Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800 text-gray-300">
                  <td className="py-3 px-6">Campanhas de Meta Ads</td>
                  <td className="py-3 px-6">Criação e gerenciamento de campanhas para alcançar novos clientes.</td>
                  <td className="py-3 px-6">R$ 1.500/mês</td>
                </tr>
                <tr className="bg-gray-700 text-gray-300">
                  <td className="py-3 px-6">Desenvolvimento Web</td>
                  <td className="py-3 px-6">Criação de sites personalizados para o seu negócio.</td>
                  <td className="py-3 px-6">R$ 5.000</td>
                </tr>
                <tr className="bg-gray-800 text-gray-300">
                  <td className="py-3 px-6">Gestão de Redes Sociais</td>
                  <td className="py-3 px-6">Desenvolvimento de conteúdo e estratégias de engajamento.</td>
                  <td className="py-3 px-6">R$ 2.000/mês</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

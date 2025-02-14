import { Package, DollarSign, TrendingUp } from 'lucide-react';
import { animated } from 'react-spring';
import { useSpring } from 'react-spring';

const SectionServices = () => {

const buttonHover = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.95)' }, config: { tension: 200, friction: 15 } });
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Item de serviço 1 */}
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

          {/* Item de serviço 2 */}
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

          {/* Item de serviço 3 */}
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
  );
};

export default SectionServices;

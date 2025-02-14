import { Instagram, Chrome, TrendingUp } from 'lucide-react';
import { animated } from 'react-spring';
import { useSpring } from 'react-spring';

const SectionWhatWeDo = () => {

 const hoverScale = useSpring({ scale: 1, from: { scale: 0.95 }, config: { tension: 200, friction: 10 } });
 const buttonHover = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.95)' }, config: { tension: 200, friction: 15 } });
  return (
    <section className="py-32 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">O Que Fazemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <animated.div
            className="bg-gray-700 rounded-lg p-10 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            style={hoverScale}
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
            style={hoverScale}
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
            style={hoverScale}
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
  );
};

export default SectionWhatWeDo;

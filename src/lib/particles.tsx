import '../app/globals.css';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine, Container } from "tsparticles-engine";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Puedes agregar configuraciones adicionales si es necesario
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Se puede hacer alguna acción adicional después de cargar las partículas
    if (container) {
      container.play(); // Inicia la animación de las partículas
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "linear-gradient(135deg, #2c3e50, #34495e)", // Degradado más oscuro y elegante
          },
        },
        particles: {
          number: {
            value: 300, // Aumentamos la cantidad de partículas
            density: {
              enable: true,
              value_area: 1000, // Aumentamos la densidad de partículas
            },
          },
          color: {
            value: "#1abc9c", // Color vibrante para las partículas
          },
          shape: {
            type: "circle", // Mantiene las partículas redondas
            stroke: {
              width: 0.5, // Bordes sutiles
              color: "#16a085", // Bordes con un tono más claro
            },
          },
          opacity: {
            value: 0.5, // Aumentamos la opacidad para hacer las partículas más visibles
            random: true,
            anim: {
              enable: true,
              speed: 3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5, // Aumentamos el tamaño de las partículas
            random: true,
            anim: {
              enable: true,
              speed: 6,
              size_min: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 3, // Aumentamos la velocidad de las partículas
            random: true,
            straight: false,
            outModes: {
              default: "out", // Las partículas se escapan cuando llegan al borde
            },
            attract: {
              enable: true,
              rotateX: 1000, // Velocidades de atracción modificadas
              rotateY: 1500,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push", // Añadir más partículas al hacer clic
            },
            onHover: {
              enable: true,
              mode: "repulse", // Efecto de repulsión al pasar el cursor
            },
          },
          modes: {
            push: {
              particles_nb: 6, // Número de partículas añadidas por clic
            },
            repulse: {
              distance: 300, // Distancia de repulsión
              duration: 0.6, // Duración del efecto
            },
          },
        },
        retina_detect: true,
        fpsLimit: 60, // Limitar los fotogramas por segundo
        delay: 0.2, // Un retraso sutil para evitar que las partículas aparezcan de golpe
      }}
    />
  );
};

export default ParticlesComponent;

import about from '../assets/img/2.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        className="my-20 text-center text-4xl"
        variants={textVariants}
      >
        À propos <span className="text-neutral-500">de moi</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={itemVariants}>
          <div className="flex items-center justify-center">
            <motion.img
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl"
              src={about}
              alt="À propos"
              variants={imageVariants}
            />
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
          <div className="flex justify-center lg:justify-start">
            <motion.p className="mt-2 max-w-xl py-6 font-light tracking-tighter" variants={textVariants}>
Je suis un développeur full stack passionné et polyvalent, dédié à la création d'applications web efficaces et conviviales. Diplômé l'année dernière, j'ai acquis de l'expérience en travaillant avec diverses technologies, notamment React, 
Express.js, MySQL, MongoDB et Laravel. Mon parcours dans le développement web a commencé par une profonde curiosité sur le fonctionnement des choses, évoluant vers une carrière où je cherche continuellement à apprendre et à m'adapter aux nouveaux défis. J'aime travailler dans des environnements collaboratifs et résoudre des problèmes complexes pour fournir des solutions de haute qualité. En dehors du codage, je reste actif, j'explore de nouvelles technologies et je contribue à des projets open-source.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

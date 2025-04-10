import profile from '../assets/img/1.png';
import { motion } from 'framer-motion';
import pdf from '../assets/img/KHALID-ERRYTOUNY.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-wrap">
        <motion.div
          className="flex flex-col items-center lg:items-start lg:w-1/2"
          variants={itemVariants}
        >
          <h1 className="pb-1 text-4xl font-thin tracking-tight lg:mt-5 lg:text-6xl">
            KHALID ER-RYTOUNY
          </h1>
          <motion.span
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
            variants={itemVariants}
          >
            DÉVELOPPEUR FULL STACK
          </motion.span>
          <motion.p
            className="mt-2 max-w-xl py-6 font-light tracking-tighter"
            variants={itemVariants}
          >
            Je suis un développeur full stack compétent avec un diplôme en développement numérique obtenu l'année dernière. J'ai acquis de l'expérience en travaillant sur divers projets et en utilisant une gamme de technologies, notamment React.js, Node.js, Laravel, MongoDB, MySQL, Bootstrap et Tailwind. Mon objectif est de créer des applications web robustes et évolutives. Passionné par le développement, je cherche à concevoir des solutions innovantes qui favorisent la croissance des entreprises et offrent des expériences utilisateur exceptionnelles.
          </motion.p>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center"
          variants={imageVariants}
        >
          <div className="w-48 h-48 lg:w-64 lg:h-64 overflow-hidden rounded-full">
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

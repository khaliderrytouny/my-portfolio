import { motion } from 'framer-motion';
import pdf from '../assets/img/KHALID-ERRYTOUNY.pdf';

const continuousFloat = {
  animate: {
    y: [-10, 10], // Déplace le bouton de haut en bas
    transition: {
      duration: 2, // Temps pour une boucle complète
      repeat: Infinity, // Boucle d'animation infinie
      repeatType: "reverse", // Inverse l'animation pour une transition fluide
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1, // Agrandit légèrement le bouton au survol
    transition: { duration: 0.3 },
  },
};

export default function MonCV() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50" // Positionne le bouton en bas à droite
      variants={continuousFloat}
      animate="animate"
      whileHover="hover"
    >
      <a
        href={pdf}
        download
        className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Télécharger le CV de Khalid Errytouny"
      >
        Télécharger le CV
      </a>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import pdf from '../assets/img/KHALID-ERRYTOUNY.pdf';

const continuousFloat = {
  animate: {
    y: [-10, 10], // Moves the button up and down
    transition: {
      duration: 2, // Time for one up-and-down loop
      repeat: Infinity, // Infinite animation loop
      repeatType: "reverse", // Reverses the animation for a smooth loop
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1, // Slightly enlarges the button on hover
    transition: { duration: 0.3 },
  },
};

export default function Mycv() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50" // Position the button at the bottom-right
      variants={continuousFloat}
      animate="animate"
      whileHover="hover"
    >
      <a
        href={pdf}
        download
        className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Download Khalid Errytouny's Resume"
      >
        Download Resume
      </a>
    </motion.div>
  );
}

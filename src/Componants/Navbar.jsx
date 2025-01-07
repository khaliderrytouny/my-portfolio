import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="mb-8 md:mb-20 flex flex-wrap items-center justify-between py-4 px-4 md:px-8">
      <div className="flex flex-shrink-0 items-center gap-2 md:gap-4 text-xl md:text-2xl">
        <h1>KHALID<span className='text-yellow-200'>.r</span></h1>
      </div>
      <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
        <motion.a 
          href="https://www.linkedin.com/in/khaliderrytouny/" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
        </motion.a>
        <motion.a 
          href="https://github.com/khaliderrytouny" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub className="hover:text-gray-500 transition-colors duration-300" />
        </motion.a>
        <motion.a 
          href="https://twitter.com/Derkhalidd" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaTwitterSquare className="hover:text-blue-400 transition-colors duration-300" />
        </motion.a>
        <motion.a 
          href="https://instagram.com/khalid_errytouny" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
        </motion.a>
      </div>
    </nav>
  );
}

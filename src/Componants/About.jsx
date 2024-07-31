import about from '../assets/img/2.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Increased delay for a more pronounced stagger effect
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 }, // Added scale for more dynamic effect
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
        variants={textVariants} // Added animation for the heading
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div className="w-full lg:w-1/2 lg:p-8" variants={itemVariants}>
          <div className="flex items-center justify-center">
            <motion.img
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl"
              src={about}
              alt="about"
              variants={imageVariants}
            />
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
          <div className="flex justify-center lg:justify-start">
            <motion.p className="mt-2 max-w-xl py-6 font-light tracking-tighter" variants={textVariants}>
I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="w-full lg:w-1/4"
              variants={imageVariants}
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div className="w-full max-w-xl lg:w-3/4" variants={textVariants}>
              <motion.h6 className="mb-2 font-semibold" variants={textVariants}>
                {project.title}
              </motion.h6>
              <motion.p className="mb-4 text-neutral-400" variants={textVariants}>
                {project.description}
              </motion.p>
              <motion.div className="flex flex-wrap">
                {project.technologies.map((t, i) => (
                  <motion.span
                    key={i}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-500"
                    variants={textVariants}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div className="mt-4 flex space-x-4" variants={textVariants}>
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-violet-500 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.links?.view && (
                  <a
                    href={project.links.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-violet-500 transition"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

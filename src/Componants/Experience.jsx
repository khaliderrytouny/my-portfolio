import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

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

const textVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const Experience = () => {
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
        variants={textVariants}
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={itemVariants}
          >
            <motion.div className="w-full lg:w-1/4" variants={itemVariants}>
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                variants={textVariants}
              >
                {experience.year}
              </motion.p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={itemVariants}
            >
              <motion.h6 className="mb-2 font-semibold" variants={textVariants}>
                {experience.role} -{' '}
                <span className="text-sm text-purple-100">{experience.company}</span>
              </motion.h6>
              <motion.p className="mb-4 text-neutral-400" variants={textVariants}>
                {experience.description}
              </motion.p>
              <motion.div className="flex flex-wrap">
                {experience.technologies.map((t, i) => (
                  <motion.span
                    key={i}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-500"
                    variants={textVariants}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;

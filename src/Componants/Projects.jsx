import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
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
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {PROJECTS.map((project, i) => (
          <SwiperSlide key={i} className="flex">
            <motion.div
              className="p-6 bg-neutral-900 rounded-lg flex flex-col justify-between"
              variants={itemVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                minHeight: '350px',
              }}
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <div
                className="mb-4 text-neutral-400"
                style={{
                  flex: 1, // هذا يضمن أن الوصف يملأ المساحة المتاحة بالتساوي
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // لتوزيع المحتوى بشكل متساوٍ داخل الوصف
                }}
              >
                {project.description}
              </div>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm text-violet-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex space-x-4">
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
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;

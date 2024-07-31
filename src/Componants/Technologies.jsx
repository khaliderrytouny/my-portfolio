import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiLaravel } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  float: {
    y: [0, -10, 0], // Floating effect
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 p-6 sm:p-12 md:p-24">
      <motion.h2
        className="my-10 text-center text-3xl sm:my-20 sm:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-3"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={iconVariants}
          whileInView="float"
        >
          <RiReactjsLine className="text-5xl sm:text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-3"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={iconVariants}
          whileInView="float"
        >
          <SiMongodb className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-3"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={iconVariants}
          whileInView="float"
        >
          <SiLaravel className="text-5xl sm:text-7xl text-red-700" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-3"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={iconVariants}
          whileInView="float"
        >
          <FaNodeJs className="text-5xl sm:text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-3"
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2 }}
          variants={iconVariants}
          whileInView="float"
        >
          <BiLogoPostgresql className="text-5xl sm:text-7xl text-cyan-900" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;

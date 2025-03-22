import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-20"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="my-10 text-center text-4xl"
        variants={itemVariants}
      >
        Contactez-moi
      </motion.h2>
      <motion.div
        className="text-center tracking-tighter"
        variants={itemVariants}
      >
        <motion.p className="my-4" variants={itemVariants}>
          {CONTACT.address}
        </motion.p>
        <motion.a href='https://mail.google.com/' className="border-b" variants={itemVariants}>
          {CONTACT.email}
        </motion.a>
        <motion.p className="my-4" variants={itemVariants}>
          {CONTACT.phoneNo}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

import { motion } from "framer-motion";

export default function RevealSection({
  title,
  text
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="reveal-section"
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.section>
  );
}
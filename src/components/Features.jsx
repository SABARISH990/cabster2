import "../styles/Features.css";
import { motion } from "framer-motion";
import {
  FaTaxi,
  FaUserTie,
  FaHeadset,
  FaRupeeSign,
} from "react-icons/fa";

export default function Features() {
  return (
    <section id="services" className="features">

      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Why Choose CABSTER?
      </motion.h2>

      <div className="cards">

        <motion.div
          className="card"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <FaTaxi className="icon" />
          <h3>Wide Fleet</h3>
          <p>Choose from Sedan, SUV and Premium cabs.</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FaUserTie className="icon" />
          <h3>Professional Drivers</h3>
          <p>Experienced and verified drivers.</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <FaRupeeSign className="icon" />
          <h3>Affordable Rates</h3>
          <p>No hidden charges and transparent pricing.</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <FaHeadset className="icon" />
          <h3>24/7 Support</h3>
          <p>Always available when you need us.</p>
        </motion.div>

      </div>

    </section>
  );
}
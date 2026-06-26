import "../styles/Testimonials.css";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="testimonials">

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        What Our Customers Say
      </motion.h2>

      <div className="testimonial-grid">

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p>
            Excellent service and very professional drivers.
          </p>
          <h4>★★★★★</h4>
        </motion.div>

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Airport pickup was perfectly on time.
          </p>
          <h4>★★★★★</h4>
        </motion.div>

        <motion.div
          className="testimonial-card"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            Best taxi service I've used recently.
          </p>
          <h4>★★★★★</h4>
        </motion.div>

      </div>

    </section>
  );
}
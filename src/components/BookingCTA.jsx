import "../styles/BookingCTA.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BookingCTA() {
  return (
    <section id="contact" className="booking-section">

      <div className="booking-card">

        {/* Heading Right → Left */}
        <motion.h2
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Ready To Ride?
        </motion.h2>

        {/* Content Left → Right */}
        <motion.p
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Book your taxi instantly through WhatsApp
          or call us directly.
        </motion.p>

        {/* Buttons Left → Right */}
        <motion.div
          className="booking-buttons"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

          <a
            href="https://wa.me/7639591469"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-book"
          >
            <FaWhatsapp />
            WhatsApp Booking
          </a>

          <a
            href="tel:7639591469"
            className="call-book"
          >
            <FaPhoneAlt />
            Call Now
          </a>

        </motion.div>

      </div>

    </section>
  );
}
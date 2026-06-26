import "../styles/Footer.css";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h3>CABSTER</h3>

        <p>
          Safe • Reliable • Affordable Taxi Service
        </p>
      </motion.div>

      <motion.div
        className="footer-links"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#fleet">Fleet</a>
        <a href="#contact">Contact</a>
      </motion.div>

      <motion.div
        className="footer-contact"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          <FaPhoneAlt /> +91 76395 91469
        </p>

        <p>
          <FaWhatsapp /> WhatsApp Booking
        </p>

        <p>
          <FaMapMarkerAlt /> Tamil Nadu, India
        </p>
      </motion.div>

      <motion.p
        className="copyright"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        © 2026 CADSTER. All Rights Reserved.
      </motion.p>

    </footer>
  );
}
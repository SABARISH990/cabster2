import "../styles/Hero.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero">
        

      <div className="hero-left">

        <p className="tagline">
          RIDE SAFE • RIDE SMART
        </p>

        <h1>
          Your Journey
          <br />
          <span>Our Priority</span>
        </h1>

        <p className="desc">
          Safe, reliable and affordable taxi service.
        </p>

       <div className="about-buttons">
  <a
    href="https://wa.me/917639591469"
    target="_blank"
    rel="noreferrer"
    className="about-book-btn"
  >
    <FaWhatsapp />
    Book Now
  </a>
</div>

      </div>

      <div className="hero-right">
        <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
          >
               Premium Taxi Service
         </motion.h1>

       

      </div>

    </section>
  );
}
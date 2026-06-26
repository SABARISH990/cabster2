import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Stats.css";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-wrapper">

      <motion.h2
        className="stats-title"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Our Stats
      </motion.h2>

      <div className="stats">

        <motion.div
          className="stat"
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2><Counter end={10000} />+</h2>
          <p>Happy Customers</p>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2><Counter end={500} />+</h2>
          <p>Daily Trips</p>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2><Counter end={24} suffix="/7" /></h2>
          <p>Support</p>
        </motion.div>

        <motion.div
          className="stat"
          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2><Counter end={100} suffix="%" /></h2>
          <p>Safety</p>
        </motion.div>

      </div>

    </section>
  );
}
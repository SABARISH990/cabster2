import "../styles/Pricing.css";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      title: "Swift",
      price: "₹15/km",
      features: [
        "Within City",
        "AC Vehicle",
        "Professional Driver",
      ],
    },
    {
      title: "Innovo",
      price: "₹19/km",
      features: [
        "Pickup & Drop",
        "Flight Tracking",
        "24/7 Available",
      ],
    },
    {
      title: "Tempo Traveller",
      price: "₹25/km",
      features: [
        "Round Trip",
        "Toll Assistance",
        "Comfort Ride",
      ],
    },
  ];

  return (
    <section className="pricing">

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Affordable Pricing
      </motion.h2>

      <div className="pricing-grid">

        {plans.map((plan, index) => (
          <motion.div
            className="price-card"
            key={index}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
            }}
          >
            <h3>{plan.title}</h3>

            <div className="price">{plan.price}</div>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>

            <a
              href="https://wa.me/7639591469"
              className="price-btn"
              target="_blank"
              rel="noreferrer"
            >
              Book Now
            </a>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
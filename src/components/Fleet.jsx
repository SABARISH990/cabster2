import "../styles/Fleet.css";
import { motion } from "framer-motion";

const cars = [
  {
    name: "Swift Dzire",
    seats: "4+1 Seats",
    image:
      "https://www.autovista.in/assets/img/new_cars_colour_variants/new-dzire-colour-pearl-arctic-white.jpg",
  },
  {
    name: "Toyota Innova",
    seats: "7+1 Seats",
    image:
      "https://images.hindustantimes.com/auto/img/2022/09/05/1600x900/Toyota_Innova_Crysta_Limited_Edition_1662351501034_1662351501149_1662351501149.png",
  },
  {
    name: "Tempo Traveller",
    seats: "13+1 Seats",
    image:
      "https://5.imimg.com/data5/EL/XW/XY/SELLER-61377153/force-traveller-17-seater-500x500.jpg",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="fleet">

      <motion.h2
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Our Fleet
      </motion.h2>

      <div className="fleet-grid">

        {cars.map((car, index) => (
          <motion.div
            className="fleet-card"
            key={index}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
            }}
          >
            <img src={car.image} alt={car.name} />

            <div className="fleet-content">
              <h3>{car.name}</h3>
              <p>{car.seats}</p>

              <a
                href="https://wa.me/7639591469"
                target="_blank"
                rel="noreferrer"
                className="fleet-btn"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
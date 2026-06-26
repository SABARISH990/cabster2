import { motion } from "framer-motion";
import "../styles/About.css";

import taxi1 from "../assets/about/taxi1.png";
import taxi2 from "../assets/about/taxi2.png";
import taxi3 from "../assets/about/taxi3.png";

export default function About() {
  const text1 =
    "CABSTER is a trusted taxi service dedicated to providing safe, comfortable, and affordable transportation solutions for individuals, families, tourists, and corporate travelers. Our goal is to make every journey convenient, reliable, and stress-free, whether it is a short trip within the city or a long-distance outstation ride.We understand the importance of punctuality and customer satisfaction. That is why we focus on delivering professional service through experienced drivers, well-maintained vehicles, and a commitment to excellence. Every ride is planned with safety, comfort, and efficiency in mind, ensuring a smooth travel experience for all passengers.";

  const text2 =
    "At CABSTER, safety is our highest priority. All our vehicles undergo regular maintenance and inspections, while our drivers are carefully verified and trained to provide professional and courteous service. We strive to create a secure and pleasant environment for every customer throughout their journey..Our professional drivers well maintained vehicles and 24/7 availability help us deliver quality service to our customers. Customer satisfaction and safety are our top priorities.";

  return (
    <section id="about" className="about-page">
      <div className="about-container">

        <motion.h1
          className="drop-title"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          ABOUT CABSTER
        </motion.h1>

        <p className="animated-paragraph">
          {text1.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>

        <p className="animated-paragraph">
          {text2.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </p>

        <div className="banner">
  <div className="banner-text">
   CABSTER TOURS AND TRAVELLERS
  </div>
</div>

      </div>
    </section>
  );
}
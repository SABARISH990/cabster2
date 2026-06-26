import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/TaxiScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function TaxiScroll() {
  useEffect(() => {
    gsap.to(".taxi", {
      x: window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".road-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="road-section">
      <h2>Travel Anywhere, Anytime</h2>

      <div className="road">
        <img
          className="taxi"
          src="https://cdn-icons-png.flaticon.com/512/744/744465.png"
          alt="Taxi"
        />
      </div>
    </section>
  );
}
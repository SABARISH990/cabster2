import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/taxiDrive.css";

gsap.registerPlugin(ScrollTrigger);

export default function TaxiDrive() {
  const sectionRef = useRef(null);
  const taxiRef = useRef(null);
  const roadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🚖 Taxi scroll movement
      gsap.to(taxiRef.current, {
        x: "120vw",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

      // 🛣️ Road movement (illusion)
      gsap.to(roadRef.current, {
        x: "-50%",
        repeat: -1,
        ease: "none",
        duration: 3,
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="taxi-section" ref={sectionRef}>
      

      <div className="road" ref={roadRef}>
        <div className="road-line"></div>
        <div className="road-line"></div>
        <div className="road-line"></div>
      </div>

      <div className="taxi" ref={taxiRef}>
       <img
  src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
  alt="taxi"
/>
      </div>
    </section>
  );
}
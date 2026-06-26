import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Fleet from "./components/Fleet";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import WhatsAppPopup from "./components/WhatsAppPopup";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Background Video */}
      <div className="bg-video">
        <video autoPlay muted loop playsInline>
          <source src="/taxi-video.mp4" type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
      </div>

      {/* Website Content */}
      <div className="site-content">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Fleet />
        <Stats />
        <Testimonials />
        <BookingCTA />
        <Footer />
        <CallButton />
        <WhatsAppPopup />
      </div>
    </>
  );
}
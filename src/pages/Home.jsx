import Hero from "../components/Hero";
import Features from "../components/Features";
import Fleet from "../components/Fleet";
import Stats from "../components/Stats";
import TaxiDrive from "../components/TaxiDrive";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Fleet />
      <Stats />
      <TaxiDrive />
      <Testimonials />
      <BookingCTA />
    </>
  );
}
import "../styles/Navbar.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CABSTER</div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href='#about'>About</a>

        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#fleet">Fleet</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a
        href="https://wa.me/7639591469"
        target="_blank"
        rel="noreferrer"
        className="nav-btn"
      >
        <FaWhatsapp />
        Book Now
      </a>
    </nav>
  );
}
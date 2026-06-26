import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppPopup.css";

export default function WhatsAppPopup() {
  return (
    <a
      href="https://wa.me/7639591469"
      target="_blank"
      rel="noreferrer"
      className="wa-popup"
    >
      <FaWhatsapp />
    </a>
  );
}
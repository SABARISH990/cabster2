import { FaPhoneAlt } from "react-icons/fa";
import "../styles/CallButton.css";

export default function CallButton() {
  return (
    <a
      href="tel:7639591469"
      className="call-btn"
    >
      <FaPhoneAlt />
    </a>
  );
}
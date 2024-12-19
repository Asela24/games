import { Link } from "react-router-dom";
import './BackButton.css'

export const ReturnButton = () => {
  return (
    <Link to="/">
      <button className="back-button-container"> Back </button>
    </Link>
  );
};

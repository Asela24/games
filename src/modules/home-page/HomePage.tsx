import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      Select Game
      <Link to="/games/tag">
        <button> Tag game</button>
      </Link>
    </div>
  );
};

import "./HomePage.css";
import { GameCard } from "../../components/GameCard/GameCard";
import { GAMES } from "../../data/games";

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="games-catalog">
        <h2>Select Game</h2>

        {GAMES.map((game) => (
          <GameCard {...game} />
        ))}
      </div>
    </div>
  );
};

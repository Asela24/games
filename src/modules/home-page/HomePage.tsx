import "./HomePage.css";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { CARDS } from "../../data/cards";

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="games-catalog">
        <h2>Select Game</h2>

        <div className="cards-container">
          {CARDS.map((game) => (
            <ItemCard {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import "./GameCard.css";

type Props = {
  img: string;
  url: string;
  name: string;
};

export const GameCard = ({ img, url, name }: Props) => {
  return (
    <div className="game-card-container">
      <img src={img} className="game-card-img" />
      <div  className="game-card-bg"/>
      <Link to={url} className="game-card-name">
        <span>{name}</span>
      </Link>
    </div>
  );
};

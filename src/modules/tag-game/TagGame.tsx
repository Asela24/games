import { useEffect, useState } from "react";
import "./TagGame.css";
import { generateSolvablePuzzle } from "./utils/get-start-config";
import { canMoveItem, getEmptyPosition } from "./utils/movements";
import { winnerPosition } from "./utils/const";

export const TagGame = () => {
  const [gameState, setGameState] = useState(generateSolvablePuzzle());

  const handleMovement = (x: number, y: number) => {
    const emptyState = getEmptyPosition(gameState);
    const canMove = canMoveItem({
      currentPosition: { x, y },
      emptyPosition: { x: emptyState.x, y: emptyState.y },
    });

    if (canMove) {
      const newState = [...gameState];
      newState[emptyState.x][emptyState.y] = newState[x][y];
      newState[x][y] = 0;

      setGameState(newState);
    }
  };

  useEffect(() => {
    if (JSON.stringify(gameState) === JSON.stringify(winnerPosition)) {
      alert("good job");
    }
  }, [gameState]);

  return (
    <div className="game-field">
      {gameState.map((row, x) =>
        row.map((elem, y) => {
          if (elem === 0) return null;
          return (
            <span
              onClick={() => handleMovement(x, y)}
              className="game-elem"
              style={{
                top: x * 25 + "%",
                left: y * 25 + "%",
              }}
            >
              {elem}
            </span>
          );
        })
      )}
    </div>
  );
};

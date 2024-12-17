export type Position = {
  x: number;
  y: number;
};

export const canMoveItem = ({
  currentPosition,
  emptyPosition,
}: {
  currentPosition: Position;
  emptyPosition: Position;
}) => {
  const distanceX = Math.abs(currentPosition.x - emptyPosition.x);
  const distanceY = Math.abs(currentPosition.y - emptyPosition.y);

  const canMoveX = distanceX === 1 && distanceY === 0;
  const canMoveY = distanceY === 1 && distanceX === 0;

  return canMoveX || canMoveY;
};

export const getEmptyPosition = (state: number[][]) => {
  let emptyX = 0;
  let emptyY = 0;

  state.map((row, xPosition) => {
    let counter = 0;
    while (counter < row.length) {
      if (row[counter] === 0) {
        emptyX = xPosition;
        emptyY = counter;
        break;
      }
      counter++;
    }
  });

  return {
    x: emptyX,
    y: emptyY,
  };
};

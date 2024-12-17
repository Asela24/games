function isSolvable(tiles: number[]) {
  let inversionCount = 0;
  let emptyRow = 0;

  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] === 0) {
      emptyRow = Math.floor(i / 4) + 1;
      continue;
    }
    for (let j = i + 1; j < tiles.length; j++) {
      if (tiles[j] !== 0 && tiles[i] > tiles[j]) {
        inversionCount++;
      }
    }
  }

  if (
    (inversionCount % 2 === 0 && emptyRow % 2 === 1) ||
    (inversionCount % 2 === 1 && emptyRow % 2 === 0)
  ) {
    return true;
  }
  return false;
}

export function generateSolvablePuzzle() {
  let tiles = Array.from({ length: 15 }, (_, i) => i + 1);
  tiles.push(0);

  let isPuzzleSolvable = false;

  while (!isPuzzleSolvable) {
    tiles = shuffleArray(tiles);
    isPuzzleSolvable = isSolvable(tiles);
  }

  return [
    tiles.slice(0, 4),
    tiles.slice(4, 8),
    tiles.slice(8, 12),
    tiles.slice(12, 16),
  ];
}

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


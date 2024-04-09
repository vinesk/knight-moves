// knightMoves.js
function knightMoves(start, end) {
  const moves = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  let queue = [[start]];
  while (queue.length) {
    let path = queue.shift();
    let [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      return {
        moves: path.length - 1,
        path: path,
      };
    }

    for (let [dx, dy] of moves) {
      let next = [x + dx, y + dy];
      if (isValid(next)) {
        queue.push(path.concat([next]));
      }
    }
  }

  return { moves: 0, path: [] };
}

module.exports = knightMoves;

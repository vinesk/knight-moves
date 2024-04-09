const knightMoves = require('./knightMoves');

describe('knightMoves', () => {
  let originalLog;
  let consoleOutput;
  const mockedLog = (output) => consoleOutput.push(output);

  beforeEach(() => {
    originalLog = console.log;
    console.log = mockedLog;
    consoleOutput = [];
  });

  afterEach(() => {
    console.log = originalLog;
  });

  const printPath = (result) => {
    console.log(`You made it in ${result.moves} moves! Here's your path:`);
    result.path.forEach((p) => console.log(`[${p}]`));
  };

  test('should find a valid path from [3,3] to [4,3]', () => {
    const result = knightMoves([3, 3], [4, 3]);
    printPath(result);
    expect(result.moves).toBe(3);
    expect(result.path[0]).toEqual([3, 3]);
    expect(result.path[result.path.length - 1]).toEqual([4, 3]);
  });

  test('should find a path with a single move from [0,0] to [1,2]', () => {
    const result = knightMoves([0, 0], [1, 2]);
    printPath(result);
    expect(result.moves).toBe(1);
    expect(result.path).toEqual([
      [0, 0],
      [1, 2],
    ]);
  });
});

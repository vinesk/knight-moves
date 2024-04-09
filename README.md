# Knight's Travails

## Introduction

This project, inspired by [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails), aims to solve the classic problem of a knight's movement on a chessboard. The goal is to find the shortest path a knight must take to move from one square to another on a standard 8x8 chessboard.

## Features

- Calculates the shortest path a knight must take to move from point A to point B on the chessboard.
- Displays the number of moves required as well as the sequence of squares visited.

## Technologies Used

- JavaScript for the logic of calculating the path.
- Jest for unit testing.

## Installation

To use this project, follow the steps below:

1. Clone this repository to your local machine using:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd knights-travails
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. To run the tests and ensure everything is working as expected, execute:

   ```bash
   npm test
   ```

## Usage

The main function `knightMoves(start, end)` takes two parameters: the starting and ending positions in the form of arrays `[x, y]`, where `x` and `y` are integers between 0 and 7 representing coordinates on the chessboard.

Example usage:

```javascript
const knightMoves = require('./knightMoves');

knightMoves([0, 0], [1, 2]);
```

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -am 'Add some amazing feature'`).
4. Push the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

This project is distributed under the MIT License. See the `LICENSE` file for more information.

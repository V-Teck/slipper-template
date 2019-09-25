const path = require('path');

module.exports = {
  entry: './solo/js/game.js',
  output: {
    path: path.resolve(__dirname, 'solo/build'),
    filename: 'main.js'
  }
};
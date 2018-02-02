const analyse = array => ( {
  length: array.length,
  average: array.reduce( (accumulator, current) => accumulator + current, 0) / array.length,
    max: array.sort((a, b) => a - b).pop(),
    min: array.shift()
  }
);

module.exports = analyse;
/**
 * Max 3 - takes in 3 numbers, return the largest
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

const solution = (a, b, c) => {
  let max = a;
  if (b > a && b > c) {
    max = b;
  }

  if (c > a && c > b) {
    max = c;
  }
  return max;
};

module.exports = {
  solution,
};


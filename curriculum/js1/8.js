/**
 * Greatest Common Denominator - returns greatest common denominator
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, divisor = 1, greatest = 1) => {
  if (a === 0 || b === 0) {
    return;
  }

  if (divisor > a || divisor > b) {
    return greatest;
  }
 
  if (a % divisor === 0 && b % divisor === 0) {
    greatest = divisor;
  }
  return solution(a, b, divisor + 1, greatest);
};

module.exports = {
  solution,
};

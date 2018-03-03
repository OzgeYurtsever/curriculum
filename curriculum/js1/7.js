/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, div = 2) => {
  if (a <= 1) {
    return false;
  }

  if (div >= a) {
    return true;
  }

  if (a % div === 0) {
    return false;
  }

  return solution(a, div + 1);
};

module.exports = {
  solution,
};


/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a) => {
  if (a === 2) {
    return true;
  }

  if (a ===1) {
    return false;
  }
    
  return a % 2 === 1;
};

module.exports = {
  solution,
};


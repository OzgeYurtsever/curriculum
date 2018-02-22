/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, sum = 0, divisor = a - 1) => {
  if (a <= 1 || divisor === 1) {
    return sum;
  } 

  if (a % divisor === 0) {
    sum += divisor;
  }
  
  return solution(a, sum, divisor = divisor - 1);
};

module.exports = {
  solution,
};

/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (a, sum = 0, run = 1) => {
  if (a === 0) {
    return;
  } 

  let divisor = a - run;
  if (divisor === 1) {
    return sum;
  }

  run++;

  if (a % divisor === 0) {
    sum += divisor;
  }
  return solution(a, sum, run);
};

module.exports = {
  solution,
};

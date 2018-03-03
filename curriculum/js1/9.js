/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, r = a + 1) => {
  if (r % 7 === 0) {
    return r;
  }

  return solution(a + 1);
}

module.exports = {
  solution,
};

/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, isFirstRun = true) => {
  if (a === 0) {
    return solution(a + 1);
  }

  if (isFirstRun) {
    if (a % 7  === 0) {
      return solution(a + 1)
    }
    isFirstRun = false;
  }

  if (a % 7 === 0) {
    return a;
  }

  return solution(a + 1, isFirstRun);
}

module.exports = {
  solution,
};

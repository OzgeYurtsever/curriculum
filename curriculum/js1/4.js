/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 a* : @param {number} a
 * @param {string} b
 *a @returns {string}
 */


const solution  = (times, word, result = '' ) => {
  if (times <= 0) {
    return result;
  }
  return solution(times - 1, word, result + word);
}

module.exports = {
  solution,
};


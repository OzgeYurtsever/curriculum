/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 a* : @param {number} a
 * @param {string} b
 *a @returns {string}
 */


const solution  = (times, word) => {
  if (times <= 0) {
    return '';
  } else if (times > 1) {
    word += solution(times - 1, word);
  }
    return word;
}

module.exports = {
  solution,
};


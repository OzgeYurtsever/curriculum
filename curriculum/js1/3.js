/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (a, b = 'hello') => {
  if (a <= 0 ) {
    return '';
  } else if (a > 1) {
    b += solution(a - 1, b);
  }
  return b;
}
module.exports = {
  solution,
};


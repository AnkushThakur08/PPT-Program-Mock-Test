// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator

const mySqrt = (x) => {
  if (x === 0) return 0;

  let left = 0;
  let right = x;
  let precision = 1e-7; // Set desired precision

  while (left <= right) {
    const mid = (left + right) / 2;
    const square = mid * mid;

    if (Math.abs(square - x) <= precision) {
      return mid;
    } else if (square < x) {
      left = mid + precision;
    } else {
      right = mid - precision;
    }
  }

  return right;
};

console.log(mySqrt(4)); /* 2 */
console.log(mySqrt(8)); /* 2.82 */

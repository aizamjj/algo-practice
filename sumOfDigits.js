/* multiples of nine sum to nine; i.e. 9 -> 9, 18 -> 1+ 8 = 9
repeating cycle of sum of digits of other multiples:
2 {2, 4, 6. 8, 1, 3, 5, 7, 9}
3 {3, 6, 9, 3, 6, 9, 3, 6, 9}
It is asserted that the sum of digits follows a repeating sequence of length 9. This is because for any decimal representation x, the number 10*x will have the same sum of digits. 
*/

const findSumRecursively = (integer) => {
  if (integer < 10) {
    return integer;
  }
  let sum = 0;
  while(integer > 0) {
    sum += Math.floor(integer % 10);
    integer = integer / 10;
  }
  return findSum(sum);
};


// Another approach

const findSum = (integer) => {
  if (integer === 0) {
    return integer;
  }
  let remainder = integer % 9;
  if (remainder === 0) {
    return 9;
  } else {
    return remainder;
  }
};

console.log(findSum(12345)); // 6
console.log(findSum(999)) // 9
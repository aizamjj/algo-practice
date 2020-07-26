// O(n) time and O(N) space

function getDifferentNumber(arr) {
  let n = arr.length;
  // store the integers in Array
  const integers = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let currentInt = arr[i];
    if (currentInt < n) {
        integers[currentInt] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (integers[i] === 0) {
      return i;
    }
  }
  return n;
};

// can use set
// if allowed to modify arr, then in-place can be O(N) time and O(1) space


// TEST
let desc = 'Array of 0';
let input = [0];
let expected = 1;
let actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

desc = 'consecutive';
input = [0, 1, 2];
expected = 3;
actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

desc = 'unsorted';
input = [1, 3, 0, 2];
expected = 4;
actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

desc = 'Array of one max';
input = [10000];
expected = 0;
actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

desc = 'unsorted';
input = [1, 0, 3, 4, 5];
expected = 2;
actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

desc = 'Array of 0';
input = [0, 10000];
expected = 1;
actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

desc = 'Array of 0';
input = [0, 99999, 100000];
expected = 1;
actual = getDifferentNumber(input);
assertEqual(expected, actual, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }

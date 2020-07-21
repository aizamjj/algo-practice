// O(n) time and O(n) space
const sortScores = (unsortedScores, highestPossibleScore) => {
  // create array to store all the scores, starting at 0 to highestPossible score
  const scores = new Array(highestPossibleScore + 1).fill(0);

  // populate scores
  unsortedScores.forEach(score => {
    scores[score]++;
  });

  // populate the sorted array
  const sortedScores = [];

  // for each item in the scores array push the score as many times as it occures
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scores[score];

    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
    // while(count > 0) {
    //   sortedScores.push(score);
    //   count--;
    // }
  }
  return sortedScores;
};

// Tests

let desc = 'no scores';
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'one score';
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'two scores';
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'many scores';
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'repeated scores';
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
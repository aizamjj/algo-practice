// input: array of stock prices
// output: profit - number
// constraints: no shorting -must purchase first, cannot purchase and sell in the same time step

const getMaxProfit = (stockPrices) => {
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  let minPrice = stockPrices[0], 
      maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // see what the profit would be if we bought at the min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;
    // update maxProfit if we can do better
    maxProfit = Math.max(maxProfit, potentialProfit);
    // ensure minPrice is the lowest price we've seen thus far
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
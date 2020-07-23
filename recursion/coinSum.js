const makeChange = (total) => {
  const count = 0;
  const coins = [200, 200, 50, 20, 10, 5, 2, 1];
  const recurse = (currentTotal, coinIndex) => {
    if (currentTotal === total) {
      count++;
    }
    if (currentTotal < total) {
      for (let i = coinIndex; i < coins.length; i++) {
          const currentCoin = coins[i];
          recurse(currentTotal + currentCoin, i);
      }
    }
  }
  recurse(0,0);
  return count;
}


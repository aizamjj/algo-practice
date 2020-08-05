const checkMonotonicity = (arr) => {
  let output = [];

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2]) {
      output.push(1);
    } else if (arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]) {
      output.push(1);
    } else {
      output.push(0);
    }
  }
  return output;
}

// let input = [2, 3, 4, 5, 8];
let input = [2, 2, 2, 2, 2, 2]
console.log(checkMonotonicity(input));
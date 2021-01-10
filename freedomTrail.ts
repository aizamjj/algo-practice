function mod(x, m) {
  return (x%m + m)%m;
}

function fill(n, s) {
  let array = [];
  while (n > 0) {
    array.push(s)
    n--;
  }
  return array;
}

function solve(ring: string, key: string, keyIndex: number=0, ringIndex: number=0): string[] {
  
  if (keyIndex === key.length) {
    return []; 
  } 
  
  let char: string = key[keyIndex];
  
  const leftRing = ring.slice(0, ringIndex + 1).split('').reverse(). join('') + ring.slice(ringIndex + 1).split('').reverse().join('')
  const rightRing = ring.slice(ringIndex) + ring.slice(0, ringIndex)
    
  let rightIndex: number = rightRing.indexOf(char);
  let leftIndex: number = leftRing.indexOf(char);
  
  let lIndex = mod((ringIndex - leftIndex), ring.length);  
  let rIndex = mod((ringIndex + rightIndex), ring.length);
  let leftPath = fill(lIndex, '<-').concat('.');
  let rightPath = fill(rIndex, '->').concat('.');
  leftPath = leftPath.concat(solve(ring, key, keyIndex + 1, leftIndex))
  rightPath = rightPath.concat( 
    solve(ring, key, keyIndex + 1, rightIndex))
    console.log('right', rightPath, char, rIndex, rightIndex, rightRing);
    console.log('left', leftPath, char, lIndex, leftIndex, leftRing)
  let min = leftPath.length < rightPath.length ? leftPath : rightPath;
  // let minDistance = Math.min((leftPath.concat(
  //   solve(ring, key, keyIndex + 1, leftIndex))).length, (rightPath.concat( 
  //   solve(ring, key, keyIndex + 1, rightIndex)).length
  // )
  return min;
}

// test
// const result = solve('godding', 'gd', 0, 0);
// console.log(solve('godding', 'godding', 0, 0))
const result = solve('godding', 'dn', 0, 0);
console.log(result)

// dn
//        'd'
//      /    \
//      4     2 
//   /   \   /  \
//  4     2 4    3  n
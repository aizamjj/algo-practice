function mod(x, m) {
  return (x % m + m) % m;
}
console.log(mod(2, 5))

function fill(n, s) {
  let array = [];
  while (n > 0) {
    array.push(s)
    n--;
  }
  return array.concat('.');
}



function solve(ring: string, key: string, keyIndex: number, ringIndex: number): string[] {
  
  if (keyIndex === key.length) {
    return []; 
  } 
  
  let currChar: string = key[keyIndex];
  let minPath = [];

   const leftRing: string = ring.slice(0, ringIndex + 1).split('').reverse(). join('') + ring.slice(ringIndex + 1).split('').reverse().join('')
  const rightRing: string = ring.slice(ringIndex) + ring.slice(0, ringIndex)
    
  let rightIndex: number = rightRing.indexOf(currChar);
  let leftIndex: number = leftRing.indexOf(currChar);
  
  let lIndex: number = mod((ringIndex - leftIndex), ring.length);  
  let rIndex = mod((ringIndex + rightIndex), ring.length);
  let leftPath = fill(leftIndex, '<-').concat(currChar);
  let rightPath = fill(rightIndex, '->').concat(currChar);
  
  leftPath = leftPath.concat(solve(ring, key, keyIndex + 1, rIndex))
  rightPath = rightPath.concat(solve(ring, key, keyIndex + 1, rIndex))

  let min = leftPath.length < rightPath.length ? leftPath : rightPath;

  return min;
}

// test
//console.log(solve('godding', 'gd', 0, 0))
//console.log(solve('godding', 'oi', 0, 0))
//console.log(solve('godding', 'godding', 0, 0))
//console.log(solve('godding', 'dn', 0, 0))
console.log(solve('godding', 'goddog', 0, 0))
console.log(solve('baezushka', 'kbkae', 0, 0))


// dn
//        'd'
//      /    \
//      4     2 
//   /   \   /  \
//  4     2 4    3  n

// gd
//         'g'
//        /   \
//       0    0
//     /  \  / \
//    4   2  4  2

// oi
//       'o'
//      /   \
//     6    1
//    / \   / \
//   4  3  4    3

// goddog

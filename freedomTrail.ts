function mod(x, m) {
  return (x%m + m)%m;
}
function solve(ring: string, key: string, keyIndex: number=0, ringIndex: number=0): number {
  if (keyIndex === key.length) {
    return 0; 
  }    
  let char: string = key[keyIndex];

  const leftRing = ring.slice(0, ringIndex + 1).split('').reverse(). join('') + ring.slice(ringIndex + 1).split('').reverse().join('')
  const rightRing = ring.slice(ringIndex) + ring.slice(0, ringIndex)
    
  let rightIndex: number = rightRing.indexOf(char);
  let leftIndex: number = leftRing.indexOf(char);
  let stupidLeftRingIndex = mod((ringIndex - leftIndex), ring.length);
  let stupidRightRingIndex = mod((ringIndex + rightIndex), ring.length);
  let minDistance: number = Math.min(
    solve(ring, key, keyIndex + 1, stupidLeftRingIndex) || leftIndex, 
    solve(ring, key, keyIndex + 1, stupidRightRingIndex) || rightIndex
  )
  console.log(
      'solve for:', char,
      'right:', rightIndex, 
      'left:', leftIndex, 
      'rightRing:', rightRing, 
      'leftRing:', leftRing, 
      'ringIndex:', ringIndex, 
      'leftRingIndex:', stupidLeftRingIndex, 
      'rightRingIndex:', stupidRightRingIndex,
      'mindistance:', minDistance
      )
  return minDistance + 1;
}

// test
// const result: number = solve('godding', 'gd', 0, 0);
// console.log(solve('godding', 'godding', 0, 0))
const result: number = solve('godding', 'dn', 0, 0);
console.log(result)


//        'd'
//      /    \
//      4     2
//   /   \   /  \
//  4     2 4    3
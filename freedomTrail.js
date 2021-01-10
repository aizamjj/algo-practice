function mod(x, m) {
    return (x % m + m) % m;
}
function fill(n, s) {
    var array = [];
    while (n > 0) {
        array.push(s);
        n--;
    }
    return array;
}
function solve(ring, key, keyIndex, ringIndex) {
    if (keyIndex === void 0) { keyIndex = 0; }
    if (ringIndex === void 0) { ringIndex = 0; }
    if (keyIndex === key.length) {
        return [];
    }
    var char = key[keyIndex];
    var leftRing = ring.slice(0, ringIndex + 1).split('').reverse().join('') + ring.slice(ringIndex + 1).split('').reverse().join('');
    var rightRing = ring.slice(ringIndex) + ring.slice(0, ringIndex);
    var rightIndex = rightRing.indexOf(char);
    var leftIndex = leftRing.indexOf(char);
    var lIndex = mod((ringIndex - leftIndex), ring.length);
    var rIndex = mod((ringIndex + rightIndex), ring.length);
    var leftPath = fill(lIndex, '<-').concat('.');
    var rightPath = fill(rIndex, '->').concat('.');
    leftPath = leftPath.concat(solve(ring, key, keyIndex + 1, leftIndex));
    rightPath = rightPath.concat(solve(ring, key, keyIndex + 1, rightIndex));
    console.log('right', rightPath, char, rIndex, rightIndex, rightRing);
    console.log('left', leftPath, char, lIndex, leftIndex, leftRing);
    var min = leftPath.length < rightPath.length ? leftPath : rightPath;
    // let minDistance = Math.min((leftPath.concat(
    //   solve(ring, key, keyIndex + 1, leftIndex))).length, (rightPath.concat( 
    //   solve(ring, key, keyIndex + 1, rightIndex)).length
    // )
    return min;
}
// test
// const result = solve('godding', 'gd', 0, 0);
// console.log(solve('godding', 'godding', 0, 0))
var result = solve('godding', 'dn', 0, 0);
console.log(result);
// dn
//        'd'
//      /    \
//      4     2 
//   /   \   /  \
//  4     2 4    3  n

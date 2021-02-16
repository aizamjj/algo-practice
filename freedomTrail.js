function mod(x, m) {
    return (x % m + m) % m;
}
console.log(mod(2, 5));
function fill(n, s) {
    var array = [];
    while (n > 0) {
        array.push(s);
        n--;
    }
    return array.concat('.');
}
function solve(ring, key, keyIndex, ringIndex) {
    if (keyIndex === key.length) {
        return [];
    }
    var currChar = key[keyIndex];
    var minPath = [];
    var leftRing = ring.slice(0, ringIndex + 1).split('').reverse().join('') + ring.slice(ringIndex + 1).split('').reverse().join('');
    var rightRing = ring.slice(ringIndex) + ring.slice(0, ringIndex);
    var rightIndex = rightRing.indexOf(currChar);
    var leftIndex = leftRing.indexOf(currChar);
    var lIndex = mod((ringIndex - leftIndex), ring.length);
    var rIndex = mod((ringIndex + rightIndex), ring.length);
    var leftPath = fill(leftIndex, '<-').concat(currChar);
    var rightPath = fill(rightIndex, '->').concat(currChar);
    leftPath = leftPath.concat(solve(ring, key, keyIndex + 1, rIndex));
    rightPath = rightPath.concat(solve(ring, key, keyIndex + 1, rIndex));
    var min = leftPath.length < rightPath.length ? leftPath : rightPath;
    return min;
}
// test
//console.log(solve('godding', 'gd', 0, 0))
//console.log(solve('godding', 'oi', 0, 0))
//console.log(solve('godding', 'godding', 0, 0))
//console.log(solve('godding', 'dn', 0, 0))
console.log(solve('godding', 'goddog', 0, 0));
console.log(solve('baezushka', 'kbkae', 0, 0));
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

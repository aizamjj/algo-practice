function mod(x, m) {
    return (x % m + m) % m;
}
function solve(ring, key, keyIndex, ringIndex) {
    if (keyIndex === void 0) { keyIndex = 0; }
    if (ringIndex === void 0) { ringIndex = 0; }
    if (keyIndex === key.length) {
        return 0;
    }
    var char = key[keyIndex];
    var leftRing = ring.slice(0, ringIndex + 1).split('').reverse().join('') + ring.slice(ringIndex + 1).split('').reverse().join('');
    var rightRing = ring.slice(ringIndex) + ring.slice(0, ringIndex);
    var rightIndex = rightRing.indexOf(char);
    var leftIndex = leftRing.indexOf(char);
    var stupidLeftRingIndex = mod((ringIndex - leftIndex), ring.length);
    var stupidRightRingIndex = mod((ringIndex + rightIndex), ring.length);
    var minDistance = Math.min(solve(ring, key, keyIndex + 1, stupidLeftRingIndex) || leftIndex, solve(ring, key, keyIndex + 1, stupidRightRingIndex) || rightIndex);
    console.log('solve for:', char, 'right:', rightIndex, 'left:', leftIndex, 'rightRing:', rightRing, 'leftRing:', leftRing, 'ringIndex:', ringIndex, 'leftRingIndex:', stupidLeftRingIndex, 'rightRingIndex:', stupidRightRingIndex, 'mindistance:', minDistance);
    return minDistance + 1;
}
// test
// const result: number = solve('godding', 'gd', 0, 0);
// console.log(solve('godding', 'godding', 0, 0))
var result = solve('godding', 'dn', 0, 0);
console.log(result);
//        'd'
//      /    \
//      4     2
//   /   \   /  \
//  4     2 4    3

// Task 1 - Back to front string
function backToFront(str, symbolsCount) {
    return symbolsCount <= str.length  
    ? `${str.slice(str.length - symbolsCount, str.length)}${str}${str.slice(str.length - symbolsCount, str.length)}`
    : str;     
};
console.log(backToFront('hello', 1)); // ohelloo
console.log(backToFront('abc', 3)); // abcabcabc
console.log(backToFront('world', 2)); // ldworldld
console.log(backToFront('world', 20)); // world

// Task 2 - Nearest number
function nearest(z, x, y) {
    return Math.abs(z - x) < Math.abs(z - y) ? x : y;
};
console.log(nearest(100, 22, 122)); // 122;
console.log(nearest(50, 22, 122)); // 22;

// Task 3 - (*)Remove array duplicates
function removeDuplicate(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
};
console.log(removeDuplicate([1,2,3,2,3,1,1])); // [1,2,3]
console.log(removeDuplicate(['a', 1, '2', 'b', 1, '2', 'b'])); // ['a', 1, '2', 'b']

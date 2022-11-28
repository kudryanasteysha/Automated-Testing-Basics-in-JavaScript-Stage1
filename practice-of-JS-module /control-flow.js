// Task 1 - Min
function getMin(number1, number2, number3) {
    return Math.min(number1,number2,number3);
};
console.log(getMin(5, 9, 7)) // result: 5
console.log(getMin(5, 0, -7)) // result: -7

// Task 2 - Even Odd checker
function evenOrOdd(x, y, z) {
    if (x % 2 == 0 && y % 2 == 0 && z % 2 == 0){
        return "even"
        } else if (x % 2 != 0 && y % 2 != 0 && z % 2 != 0) {
             return "odd"
        } else
            return "even/odd"
};
console.log(evenOrOdd(1, 3, 11)); // result: odd
console.log(evenOrOdd(2, 4, 8)); // result: even
console.log(evenOrOdd(2, 5, 8)); // result: even/odd

// Task 3 - Range
function inOrOutRange(x, y, z) {
    if (z >= x && z <= y) {
        return "In range";
       } else {
         return "Out of range";
       }
};
console.log(inOrOutRange(5, 10, 8)); // result: In range
console.log(inOrOutRange(0, 6, 11)); // result: Out of range


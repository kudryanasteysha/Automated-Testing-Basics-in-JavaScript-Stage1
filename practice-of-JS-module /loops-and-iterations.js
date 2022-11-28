// Task 1 - String of numbers
function createString(x, y, step) {
    let string = `${x}`;
  for (let i = x + step; i <= y; i+=step) {
      string += ` ${i}`;
  } return string;
};
console.log(createString(0, 20, 5)); // result 0 5 10 15 20
console.log(createString(0, 21, 4)); // result 0 4 8 12 16 20

// Task 2 - Range sum1
function rangeSum1(x, y) {
    let i,sum = 0;
    for (let i = x; i <= y; i++) {
      sum += i;
    }
    return sum;
};
console.log(rangeSum1(0, 3)); // result: 10 (0+1+2+3+0+1+2+0+1+0)
console.log(rangeSum1(1, 4)); // result: 20 (1+2+3+4+1+2+3+1+2+1)

// Task 3 - Range sum2
function rangeSum2(x, y) {
    let i,sum = 0;
    for (let i = x; i <= y; i++) {
      sum += i;
    }
    return sum;
};
console.log(rangeSum2(5, 10)); // result: 45 (5+6+7+8+9+10)
console.log(rangeSum2(0, 6)); // result: 21 (0+1+2+3+4+5+6)

// Task 4 - Series Sum
function seriesSum(x) {
    for (var s = 0, i = 0; i < x; i++) {
        s += 1 / (1 + Math.pow(i,2) )
      }
      return s.toFixed(2)
};
console.log(seriesSum(1)); // result:  "1.00"
console.log(seriesSum(5)); // result:  (5 --> 1 + 1/4 + 1/9 + 1/16 + 1/25 --> "1.46")
console.log(seriesSum(0)); // result:  "0.00"

// Task 5 - Number of digits 
function countDigits(x) {
    let result = 0;
    while (x > 0) {
        x = Math.floor(x / 10);
        result++;
    }
    return result;
};
console.log(countDigits(123654789)); // result:  9
console.log(countDigits(252525)); // result:  6
console.log(countDigits(0)); // result:  1






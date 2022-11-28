// Task 1 - Amount
function getSum(number1, number2) {
    return Math.round((parseFloat(number1) + parseFloat(number2))*100)/100;
};
console.log(getSum(5, 3))// result: 8
console.log(getSum(-11, 3)) // result: -8
console.log(getSum(0.2, 0.7)) // result: 0.9

// Task 2 - Square
function greeting (name, surname, age)  {
    return "Hello, my name is "+name+" "+surname+" and I am "+age+" years old.";
};
console.log(isSquare(9)) // result: true (√9=3)
console.log(isSquare(8)) // result: false

// Task 3 - Greeting
function isSquare(x) {
    return x > 0 && Math.sqrt(x) % 1 === 0;
};
console.log(greeting('Bill', 'Jacobson', 33)); // result: Hello, my name is Bill Jacobson and I am 33 years old.
console.log(greeting('Jim', 'Power', 11)); // result: Hello, my name is Jim Power and I am 11 years old.

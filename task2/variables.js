let string = "Hello";
let boolean = true;
let number = 6;

// Perform addition of various types 

//string + boolean
let sum1 = string + " " + boolean;
//string + number
let sum2 = string + " " + number;
//number + boolean
let sum3 = number + " " + boolean;

console.log("\nAddition of various types ");
console.log("string + boolean = "+sum1);
console.log("string + number = "+sum2);
console.log("number + boolean = "+sum3);

// Perform multiplication of various types

//string * boolean
let mult1 = string * boolean;
//string * number
let mult2 = string * number;
//number * boolean
let mult3 = number * boolean;

console.log("\nMultiplication of various types ");
console.log("string * boolean = "+mult1);
console.log("string * number = "+mult2);
console.log("number * boolean = "+mult3);

// Divide different types

//string / boolean
let div1 = string / boolean;
//string / number
let div2 = string / number;
//number / boolean
let div3 = number / boolean;

console.log("\nDividing of various types ");
console.log("string/boolean = "+div1);
console.log("string/number = "+div2);
console.log("number/boolean = "+div3);

//Perform explicit conversion (number, string, boolean)

console.log("\nPerforming explicit conversion");
console.log("1 - "+string+" is "+typeof(string)+"\n2 - "+number+" is "+typeof(number)+"\n3 - "+boolean+" is "+typeof(boolean)+"\n");
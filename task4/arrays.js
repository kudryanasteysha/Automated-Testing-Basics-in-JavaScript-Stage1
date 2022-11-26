// Task 1 - Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
console.log("Task 1");
let arrayOfMovies = ["Luckiest Girls Alive","Wednesday","US","She Said","Hopper"];
for (let key in arrayOfMovies){
    console.log(arrayOfMovies[key]);
}

// Task 2 - Given an array of car manufacturers, convert the array to a string and back to an array
console.log("\nTask 2");
let arrayOfManufactures = ["Volkswagen Auto Group","Toyota Motor Corp","Honda","Renault-Nissan-Mitsubishi"];
console.log(arrayOfManufactures.toString());

// Task 3 - Given an array of the names of your friends, add the words hello to each element of the array
console.log("\nTask 3");
let arrayOfFriends = ["Alex","Sarah","Maya","Benjamin"];
arrayOfFriends.forEach(name=>console.log("Hello "+name));

// Task 4 - Convert numeric array to Boolean
console.log("\nTask 4");
let arrayOfNumbers = [0,1,4,0,7,10];
console.log(arrayOfNumbers.filter(Boolean));

// Task 5 - Sort the array [1,6,7,8,3,4,5,6] in descending order
console.log("\nTask 5");
let newArray = [1,6,7,8,3,4,5,6];
console.log("\nVersion # 1");
console.log(newArray.reverse());
console.log("\nVersion # 2\n");
for (let i = 0; i < newArray.length; i++) {
     console.log(newArray[i]); 
    } 

// Task 6 - Filter array [1,6,7,8,3,4,5,6] by value> 3
console.log("\nTask 6");
const myArray = [1,6,7,8,3,4,5,6];
const result = myArray.filter(checkAdult);
function checkAdult(myArray) {
  return myArray > 3;
}
console.log(result);

// Task 7 - Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
console.log("\nTask 7\nArray");
var array = [3, 5, 6, 10, 20];
function getIndexOfNumber(array, number) {
 return array.indexOf(number);
}
for(let i=0; i < array.length; i++)
{
  console.log(array[i]);  
}
console.log("Index of number 6: "+getIndexOfNumber(array,6));

// Task 8 - Implement a loop that will print the number 'a' until it is less than 10
console.log("\nTask 8");
let i = 0;
do {
  console.log("a");
  i++;
} while (i < 10);

// Task 9 - Implement a loop that prints prime numbers to the console
console.log("\nTask 9");
const lowerNumber = 2;
const higherNumber = 11;
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

// Task 10 - Implement a loop that prints odd numbers to the console
console.log("\nTask 10");
const lowerNum = 2;
const higherNum = 11;
console.log(`The odd numbers between ${lowerNum} and ${higherNum} are:`);
for (let i = lowerNum; i <= higherNum; i++) {
    if (i %2 === 0) {
        console.log(i);
    }
}

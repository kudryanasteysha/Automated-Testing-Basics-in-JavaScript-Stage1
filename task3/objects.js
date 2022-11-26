//Task 1  
// Create a car object, add a color property to it with the value equals 'black'
// Change the color property of the car object to 'green'
// Add the power property to the car object, which is a function and displays the engine power to the console
console.log("Task 1\n");
let car = {
    name: "BMW",
    color: "Black",
    getEnginePower(){
        console.log("Power is ",150)
    }
}

car.color = "Green";
car.getEnginePower();
console.log("\n Color is "+car.color);

// Task 2 - Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
console.log("\nTask 2\n");
function getSum (apples,pears) {
   return apples + pears;
 
} 
console.log("The number of accepted pears and apples equals "+getSum(5,9));

// Task 3 - Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
console.log("\nTask 3\n");
function checkName(myname) {
    if (myname == "Anastasiia") {
      return console.log("Hello "+myname);
    } else {
      return console.log("There is no such name");
    }
  }
  
console.log("Payment terminal 31: ");
checkName("Anastasiia");
  
// Task 4 -  Write a function for calculating the type of argument and type output to the console
console.log("\nTask 4\n");
function getType(a){
    return typeof(a);
}
console.log("The type of argument 'true' is "+getType(true));

// Task 5 -  Write a function that determines whether a number is prime or not
console.log("\nTask 5\n");
function isPrime(num) { 
    if (num <= 1) return false; 
    if (num % 2 == 0 && num > 2) return false; 
    const s = Math.sqrt(num); 
    for(let i = 3; i <= s; i += 2) { 
        if(num % i === 0) return false; 
    }
    return true;
  }
console.log("Is number 10 prime or not? Answer: "+isPrime(11));
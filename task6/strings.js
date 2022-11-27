// Task 1 - Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' 
console.log("Task 1");
const string1 = 'ahb acb aeb aeeb adcb axeb';
const re1 = /a[a-z]b/gi;
console.log(string1.match(re1));

// Task 2 - Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
console.log("\nTask 2");
const string2 = '2 + 3 223 2223';
const re2 =  /2 [+] 3/g;
console.log(string2.match(re2));

// Task 3 - Get the day, month and year of the current date and output it to the console separately 
console.log("\nTask 3");
let now = new Date();
console.log(now.getDate()+" "+now.getMonth()+" "+now.getFullYear()+"\n");

// Task 1 - In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
    console.log(a);
    let a = 3;
} catch (err){
    console.log("let must be declared");
}

try {
  return 1/0; 
} catch (err){
} finally{
    console.log("cannot be divided by zero");
}
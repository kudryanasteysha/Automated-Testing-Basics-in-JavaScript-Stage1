const fs = require('fs');

fs.readFile('async _programming/file.txt','utf-8', handleResult);

function handleResult(err,data) {
    if (err) { 
        throw err
    }  console.log(data);
}
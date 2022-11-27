const fs = require('fs/promises');

const promise = fs.readFile('async _programming/file.txt','utf-8');

// promise
//     .then(data => {
//         return data;
//     })
//     .then(data => {
//     });

const rejectedPromise = fs.readFile('async _programming/file.txt', 'utf-8');
rejectedPromise
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })


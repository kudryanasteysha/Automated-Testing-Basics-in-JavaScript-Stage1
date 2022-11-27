
const fs = require('fs');
const readFilePromise = new Promise((resolve, reject) => {

    fs.readFile('async _programming/file.txt','utf-8', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });

});

// readFilePromise.then(data => {
//     console.log(data);
// });

const fulfilled = Promise.resolve(42);
fulfilled.then(data => {
    console.log(data);
});

// const rejected = Promise.reject(new Error('custom error'));
// rejected.catch(err => {
//     console.log(err);
// });
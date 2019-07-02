const path = require('path');

// console.log(path.dirname);

// path.basename('');


const filelocation = path.join(__dirname,'serverjs');
console.log(`full file location ${filelocation}`);

const filename = path.basename(filelocation);
console.log(`base is ${filename}`);

const extension = path.extname(filelocation);
console.log(`extension is ${extension}`);
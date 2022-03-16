//move a file
let fs = require("fs");
let path = require("path");

let srcpath = path.join(__dirname,"file1.txt");
console.log(srcpath);
let destinationpath =path.join(__dirname,"newfolder","file1.txt");
console.log(destinationpath);

fs.copyFileSync(srcpath,destinationpath);

fs.unlinkSync(srcpath);
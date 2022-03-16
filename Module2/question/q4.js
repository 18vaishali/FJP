// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let filepath = path.join(__dirname,"..","node","UnorganisedFile");
console.log(filepath)
let content = fs.readdirSync(filepath)
console.log(content);
let extarr = [];


for(let i=0;i<content.length;i++ ){
    let name = content[i];
    let extname = path.extname(name);
    extarr.push(extname);
}
console.log(extarr);
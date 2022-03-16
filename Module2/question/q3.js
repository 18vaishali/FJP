//Q. copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let sourcepath = path.join(__dirname,"..","..","module1","index.html");
console.log(sourcepath)
let destinationpath = path.join(__dirname,"..","index.html");
console.log(destinationpath);

fs.copyFileSync(sourcepath,destinationpath);
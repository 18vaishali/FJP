"C:\Users\VISHWAS\OneDrive\Documents\Module\node\path.js"
let path = require("path");
//console.log(path);
let extensionname = path.extname("C:\Users\VISHWAS\OneDrive\Documents\Module\node\path.js");
console.log(extensionname);
let baseName = path.basename("C:\Users\VISHWAS\OneDrive\Documents\Module\node\os.js");
console.log(baseName);
console.log(__dirname);
console.log(__filename);
let dirName = __dirname;
console.log(dirName);
let newfilepath = path.join(dirName,"test.js");
console.log(newfilepath)
//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File




let fs = require("fs");
let path = require("path");

let contentpath = path.join(__dirname,"..","node","UnorganisedFile");
console.log(contentpath)
let content = fs.readdirSync(contentpath);
console.log(content);

let exarr =[];
for(let i=0;i<content.length;i++){
    let name = content[i];
    let extname = path.extname(name);
    exarr.push(extname);
}
console.log(exarr);
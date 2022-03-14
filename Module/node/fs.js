let fs = require("fs");
let path = require("path");
//let dirNAme = __dirname;

let fileName = path.join(__dirname,"file.txt");
fs.writeFileSync(fileName, "helllloooooooo");
fs.writeFileSync(fileName,"hellooo");
let content = fs.readFileSync(fileName,'utf-8');
//console.log(content);
 // fs.updateFileSync(fileName,"everyone");


 // create a directory
  // if(!fs.existsSync("hmari directory"))
  //fs.mkdirSync("hmari directory");


  // read the contents of directory 
  //let folderpath = __dirname;
  //let contentpath = fs.readdirSync(folderpath);
  //console.log(contentpath);

  //delete the directory
  //fs.rmdirSync("hmari directory");
 // fs.rmSync('hmari directory', { recursive: true, force: true });

  // copy the file in directory
  let sourcepath = path.join(__dirname,"file.txt");
  let destinationpath = path.join(__dirname,"module1","file.txt");
  console.log(sourcepath);
  console.log(destinationpath);
  fs.copyFileSync(sourcepath,destinationpath);

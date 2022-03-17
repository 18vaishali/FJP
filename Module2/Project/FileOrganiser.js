let fs = require("fs");
let path = require("path");

let folderPath = process.argv[2];
console.log(folderPath);
let folderexists = fs.existsSync(folderPath);

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
};

if(folderexists){
   let files = fs.readdirSync(folderPath);
   for(let i= 0;i< files.length;i++){
       let ext = path.extname(files[i]);
       let nameOfFolder = giveFolderName(ext);
     // console.log("ext-----",ext,"name of folder",nameofFolder);
      let pathOfFolder = path.join(folderPath, nameOfFolder);
      let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
   }
}
else{
    console.log("plz eneter a valid path")
}

function giveFolderName(ext){
    for(let key in extensions){
        let extarr = extensions[key];
        //console.log(extarr);
        for(let i = 0;i<extarr.length;i++){
            if(extarr[i]==ext){
                return key;
            }
        }
    }
    return "Others"
}
   
function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}
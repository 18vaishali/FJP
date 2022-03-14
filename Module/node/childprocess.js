let cp =  require('child_process');

//const { execSync } = require("child_process");

//cp.execFileSync("calc");
let content = cp.execSync("node test.js");
console.log("output of test" +content);
console.log(content);
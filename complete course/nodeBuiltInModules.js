
let fs = require("fs");

let text = fs.readFileSync("del.txt","utf-8");
console.log(text);

text = text.replace("this", "that");

console.log(text);

fs.writeFileSync("dels.txt" , text);
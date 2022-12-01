const fs = require("fs");
let text = fs.readFileSync("hello.txt", "utf-8");
console.log(text);
text = text.replace("browser", "Hitesh");
console.log("New file"); 
fs.writeFileSync("new.txt",text);
text = fs.readFileSync("new.txt", "utf-8");
console.log(text);
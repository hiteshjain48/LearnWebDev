/*blocking and non-blocking code
blocking or synchronous - line by line execution

non-blocking or asynchronous - line by line not garanteed(callback)
*/

const fs = require("fs");
let text = fs.readFile("hello.txt","utf-8", (err,data)=>{
    console.log(data);
});

console.log("This is a message");
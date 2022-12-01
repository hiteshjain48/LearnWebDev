const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//Express specific stuff
app.use('/static',express.static('static'));  //for serving static files
app.use(express.urlencoded());

//PUG specific stuff
app.set('view engine', 'pug');  //set the template engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory

//Endpoints
app.get("/",(req,res)=>{
    const con = "Trust the process..."
    const params = {"title":"Believe", "content":con};
    res.status(200).render('index.pug',params);
});
app.post('/', (req,res)=>{
    form = JSON.stringify(req.body);
    fs.writeFileSync('output.txt',form);
    const params = {"message": 'Your form has been submitted successfully'};;
    res.status(200).render('index.pug',params);
})
//Start the server
app.listen(port,()=>{
    console.log(`Started on port ${port}`);
})

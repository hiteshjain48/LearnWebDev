const express = require("express")
const path = require('path');
const app = express();
const port = 80;

app.use('/static', express.static('static'));
//template engine
app.set('view engine', 'pug');
//set views directory
app.set('views', path.join(__dirname,'views'));
//our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'Pug tryout', message: 'It takes time getting used to.'});
});

app.get("/",(req,res)=>{
    res.send("This is my first express app.");
});

app.get("/about", (req,res)=>{
    res.send("This the about page.");
});

app.get("/contact", (req,res)=>{
    res.send("This is contact page.");
});

app.post("/this", (req,res)=>{
    res.status(400).send("This page is not found");
});
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
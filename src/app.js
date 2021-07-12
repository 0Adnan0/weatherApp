const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const hbs = require('hbs');
const requests = require('requests');
const data = fs.readFileSync("userApi/userData.json","utf-8");

let colorStyle = "";

const realData = JSON.parse(data);
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials")
app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    
        res.render('index');
  
});

app.get("/",(req,res)=>{
   
    res.send("Home");
});
app.get("/about",(req,res) =>{
   
    res.json([{
        id: 1,
        name: "Adnan"
    },
{
        id: 2,
        name: null 
}])
})
app.get("*",(req,res)=>{
    res.status(404).render('index',{
        colorName: "ERROR 404"
        
    });
})
app.listen(8000,()=>{
    console.log("listening 8000")
})

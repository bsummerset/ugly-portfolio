const http = require("http");
const express = require("express");
const HOST = "localhost";
const PORT = 4000;

const app = express();


const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

const projects = ["Blackjack","PetProject", "Backend","React","Capstone"];
const myobj = {
    "Blackjack": "A blackjack game that was created in python.",
    "PetProject": "A pet game where the user was given the option to buy a pet then care of the pet to make the pet happy",
    "Backend": "This will be my backend project",
    "React": "This will be my react project",
    "Capstone": "This will be my final full capstone project"
}



app.get("/", (req,res) =>{
    res.render("home");
});

app.get("/projects", (req,res) => {
    const names = projects
    res.render("projects",{
        locals:{
            names,
        },
     });
 });

app.get("/projects/:id", (req,res) => {
    const id = req.params.id
    res.render('descriptions', {
        locals:{
           id,
           des:myobj[id]
        }
    } )
})

server.listen(PORT,HOST ,()=>{
    console.log(`listening on port ${HOST}:${PORT}`)
});









//3. transform an array of objects, where each object has a 
/*
const myObj = [
    {
        name: "alice",
        id: 12345
    }
    {
        name: "bob",
        id: 12347
    },
    {
        name: "charlie",
        id: 12356
    }
];

//Write the transformer function
function greetObj(o) {
    //console.log(o.id)
    return `hello ${o.name}`;
}
//Make sure it works for one item
//console.log(greetObj(myObj[0]));

//Apply it to the whole array, and capture in a new variable
const newGreetArrY = myObj.man(greetObj);
console.log(newGreetArray.join(' '));


*/
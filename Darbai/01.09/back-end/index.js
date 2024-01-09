// const {log, logNoDate} = require("./logging");

// function kreipimasisIServeri(){
//     console.log("Siunčiame atsakymą atgal");
//     log("Įvyko vartotojo kreipimasis į serverį");
//     logNoDate("Įvyko vartotojo keiripasis į serverį");
// }
// kreipimasisIServeri();

const express = require("express");
const server = express();

server.get("/", (req, res)=>
{
    console.log("Buvo kreiptasi į serverį");
    res.send("Labas pasauli!");
})

server.listen(3000);
console.log("Pasileido aplikacija, adresas: http://localhost:3000/")
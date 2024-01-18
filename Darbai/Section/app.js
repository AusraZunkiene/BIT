const fileSystem = require("fs");
const data = require("./data.json");
const express = require("express");

const app = express();

 async function readFile(){
// Sinchroninis perskaitymo būdas- vienu metu aptarnauja vieną VENGTI
//  const fileData = fileSystem.readFileSync("./data.json", "utf-8");
//Asinchroninis perskaitymo būdas-vienu metu daug aptarnauja
    const fileData = await fileSystem.promises.readFile("data.json", (err) => {
        if (err) console.log(err);
    });

    console.log(JSON.parse(fileData));
}

async function writeFile(obj){
    fileSystem.writeFile("./data.json", JSON.stringify(obj), "utf-8", (error)=>{if(error) console.log(error)});
}

readFile();

app.get("/", async(req, res)=>{
    console.log("patinka");
    data.countOfVisitors++;
    await writeFile(data);
    res.status(200).json({message: `You are a ${data.countOfVisitors}- th visitor`,})
})
app.listen(3000, ()=> {
    console.log('Serveris pasileido')
})





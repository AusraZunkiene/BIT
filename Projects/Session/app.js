const fileSystem = require("fs");
const data = require("./data.json");
const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "banana",
    saveUninitialized: true,
    resave: false,
    cookie: {httpOnly: true},
}));

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
    req.session.userId = 1;
    res.status(200).json({message: `You are a ${data.countOfVisitors}- th visitor`,})
})

app.get('/whats-my-id', (req, res)=>{
    if(req.session.userId){
        console.log(req.session.userId);
        return res.status(200).json({userId: req.session.userId});
    }
    else{ req.session.userId = 1;
        return res.status(200).json({userId: req.session.userId});

    }
   return res.send("Very good");
});

app.get('/users', (req, res)=>{
    console.log(req.session.userId);
    res.status(200).json({message: "labas"})
})

app.listen(3000, ()=> {
    console.log('Serveris pasileido')
})





const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const users = [];

server.get('/user/:id', (req, res) => {
	console.log("Method: " + req.method);
	console.log("URL: " + req.originalUrl);
	console.log("Body " + req.body);
	console.log("Parameters " + req.params.id);
	console.log("Query " + JSON.stringify(req.query));
	console.log("Buvo kreiptasi į serverį");
	//res.send("Helo");
});

server.post("/register", (req, res) => {
	console.log(req.body);
	try{
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	users.push({
		id: users.length + 1,
		username: username,
		email: email,
		password: password,
	});
	res.send("Atsakymas is serverio");}
	catch(err){
		res.send("Netinkami duomenys");
	}
});


server.get("/users", (req, res) => {
	res.send(users);
});

server.get("/users/:id", (req, res) => {
	console.log(isNaN(+req.params.id));
	if (isNaN(+req.params.id)) {res.send("ID privalo buti skaicius");}
	const selectedUser = users.find((user) => user.id === +req.params.id);
	if (!selectedUser) {
		res.send("Tokio vartotojo nėra");
	} else {
		res.send(selectedUser);
	}
});

server.post("/prisijungimas", (req, res) => {
    //1. Validuojame, ar req.body turi tokius laukus username, password
    const username = req.body.username,
        password = req.body.password;
		
    if(!username) return res.send("Prašome įvesti teisingą vardą");
    if(!password) return res.send("Prašome įvesti slaptažodį");
    //2. Patikrinti, ar vartotojas su tokiu username egzistuoja
    const selectedUser = users.find((user)=>user.username.toLowerCase() === username.toLowerCase());
    //a. jei ne, tada siusti "Vartotojas neegzistuoja"
    if(!selectedUser) return res.send("Toks vartotojas neegzistuoja")
	//b. toliau daromas tikrinimas
	//3. Ar slaptazodis atitinka.
	//Jei atitinka - tada siunciame atsakyma is serverio.
	//"Sekmingai prisijungete prie sistemos"
    if(selectedUser.password === password)
    	res.send("Sėkmingai prisijungėte prie sistemos");
});

server.listen(3000, () => {
	console.log("Aplikacija pasileido");
});

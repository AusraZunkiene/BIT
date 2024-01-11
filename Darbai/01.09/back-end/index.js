const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const todos = [];

server.get('/user/:id', (req, res) => {
	console.log("Method: " + req.method);
	console.log("URL: " + req.originalUrl);
	console.log("Body " + req.body);
	console.log("Parameters " + req.params.id);
	console.log("Query " + JSON.stringify(req.query));
	console.log("Buvo kreiptasi į serverį");
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
		
    if(!username) return res.status(400).json({message:"Prašome įvesti teisingą vardą"});
    if(!password) return res.status(400).json({message:"Prašome įvesti slaptažodį"});
    //2. Patikrinti, ar vartotojas su tokiu username egzistuoja
    const selectedUser = users.find((user)=>user.username.toLowerCase() === username.toLowerCase());
    //a. jei ne, tada siusti "Vartotojas neegzistuoja"
    if(!selectedUser) return res.status(404).json({message:"Toks vartotojas neegzistuoja"})
	//b. toliau daromas tikrinimas
	//3. Ar slaptazodis atitinka.
	//Jei atitinka - tada siunciame atsakyma is serverio.
	//"Sekmingai prisijungete prie sistemos"
    if(selectedUser.password === password)
    	//res.send("Sėkmingai prisijungėte prie sistemos");
	res.status(200).json({url:"http://127.0.0.1:5500/BIT/Darbai/01.09/front-end/todos.html"})
});

// CRUD

server.post("/todos", (req, res) => {
	const { username, todo } = req.body;

	if (!username)
		return res.status(400).json({ message: "Blogai įvestas username" });
	if (!todo) return res.status(400).json({ message: "Blogai įvestas todo" });
	
	const selectedUser = users.find((user) => user.username.toLowerCase() === username);
	if (!selectedUser)
		return res.status(404).json({ message: "Vartotojas nerastas" });

	const newTodo = { id: todos.length + 1, username, todo };
	todos.push(newTodo);
	res.status(201).json({ message: "Naujas todo buvo sėkmingai pridėtas", newTodo });
});

server.get("/todos", (req, res) => {
	res.status(200).json(todos);
});

server.get("/todos/:id", (req, res) => {
});

server.put("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id)) 
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const { username, todo } = req.body;
	const existingUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase());
	if (!existingUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });
	const existingTodo = todos.findIndex((currentTodo) => currentTodo.id === id);
	todos[existingTodo] = { ...todos[existingTodo], todo, username };
});


server.listen(3000, () => {
	console.log("Aplikacija pasileido");
});

const express = require("express");
const sessions = require('express-session');
const cors = require("cors");

const server = express();


server.use(express.json());
server.use(cors({
	origin: 'http://127.0.0.1:5500',
	credentials: true,
})); 

server.use(sessions({
	secret: 'bananas',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false 
	},
}));

//Create an API that takes two numbers as parameters and returns their sum.

server.get("/addition/:number1/:number2", (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2= parseFloat(req.params.number2);
    const sum = number1 + number2;
	res.json({sum}); 

});
// Implement an API that checks if a user with a given ID exists in an array. Respond with 200: true if the user exists, or 404: false if not.

const existUsers = [
    { userID: 1},
    { userID: 2},
    { userID: 3},
];

server.get("/check-if-user-exists/:userid", (req, res) => {
    const IDuser = +req.params.userid;
    const existID = existUsers.find(user => user.userID === IDuser)
    if (existID) {res.status(200).json( { message: "User exists"} )
    }else{
    res.status(400).json( { message: "User doesnt exist"})
}
})


// Create an API to subtract the second number from the first. Include validation to ensure subtraction from zero is not allowed.

server.get("/subtract/:number1/:number2", (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2= parseFloat(req.params.number2);
    if(isNaN(number1) || isNaN(number2)) {res.status(400).json({message: "Please provide numbers"})}
    else if(number1 === 0 || number2 === 0) {res.status(400).json({message: "Subtraction from 0 cannot be done"})}
    else { const subtract = number1 - number2;
        res.json({subtract});}
});

// Build an API that multiplies two numbers. Handle any exceptions like multiplying by a string.

server.get("/multiply/:number1/:number2", (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2= parseFloat(req.params.number2);
    if(isNaN(number1) || isNaN(number2)) {res.status(400).json({message: "Please provide numbers"})}
    else { multiply = number1 * number2;
        res.json({multiply});}

});

//Implement an API to register a new user. Use POST method to accept user data (like name, email) and store it in an array.

const users = [];

server.post("/user/register", (req, res) => {
		const username = req.body.username;
		const email = req.body.email;
		if (username && email){users.push({
			id: users.length + 1,
			username: username,
			email: email,
		});
		req.session.username = username;
		req.session.userId = users[users.length -1].id;

		res.send("Registracija sėkminga");}
        else res.send("Netinkami duomenys");

});

server.get("/users", (req, res) => {
	res.send(users);
});

//Create an API to reverse a given string.

server.get("/reverse-string/:text", (req, res) => {
    const text = req.params.text.split("").reverse().join(""); 
        res.json({text});}
);

//Build an API to fetch user details based on their ID in array.

const usersAll = [
    {id: 1, name: "Alejandro", age: 21, nationality: "spanish"},
    {id: 2, name: "Armin", age: 37, nationality: "latvian"},
    {id: 3, name: "Amrita", age: 48, nationality: "indian"},
    {id: 4, name: "Milagra", age: 21, nationality: "mexican"},
    {id: 5, name: "David", age: 21, nationality: "german"}
]

server.get("/fetch-user/:id", (req, res) => {
    const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingID = usersAll.find((user) => user.id === id);
	if (!existingID) res.status(404).json({ message: "Įrašas nebuvo rastas" });
	else res.status(200).json(existingID);
});

//Implement an API to search for products with dynamic query parameters (like name, price range).

const allProducts =[
    {name: "gypsum", price: 100 },
    {name: "limestone", price: 200 },
    {name: "marble", price: 300 },
    {name: "barite", price: 400 },
    {name: "coal", price: 500 },
    {name: "talc", price: 600 },
    {name: "dalomite", price: 700 },
    {name: "kaolin", price: 800 },
    {name: "bentonite", price: 900 },
    {name: "calcite", price: 1000 },
]

server.get("/allProducts", (req, res) => {
    const productName = req.params.name;
    let filterProducts = [...allProducts];
    if(productName) filterProducts = filterProducts.filter(product => product.name === productName);
    res.status(200).json(filterProducts);
});


server.listen(3000, () => {
	console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});
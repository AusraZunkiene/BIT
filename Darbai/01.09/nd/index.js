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

const existingUsers = [
    { userID: 1},
    { userID: 2},
    { userID: 3},
];

server.get("/check-if-user-exists/:userid", (req, res) => {
    const userid = +req.params.userid;
    const userExists = existingUsers.find(user => user.userID === userid)
    if (userExists) {res.status(200).json( { message: "User exists"} )
    }else{
    res.status(400).json( { message: "user doesnt exist"})
}
})


// Create an API to subtract the second number from the first. Include validation to ensure subtraction from zero is not allowed.

server.get("/subtract/:number1/:number2", (req, res) => {
    const number1 = parseFloat(req.params.number1);
    const number2= parseFloat(req.params.number2);
    if(number1 === 0) {res.status(400).json({message: "Subtraction from 0 cannot be done"})}
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




server.listen(3000, () => {
	console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});
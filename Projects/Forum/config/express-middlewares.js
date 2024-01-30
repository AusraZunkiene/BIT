const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const pagesRouter = require("../routes/pages");
const userRouter = require("../routes/user-router");
const bodyParser = require("body-parser");


function config(app) {

	app.set("view engine", "ejs");
	
	const publicRouter = express.Router();

	publicRouter.use(express.static("public"));
	
	app.use(express.json());
	app.use(bodyParser.urlencoded());
	app.use(
		session({
			secret: process.env.SESSIONS_SECRET,
			resave: false,
			saveUninitialized: false,
			// Sesijų saugojimui duomenų bazėje
			store: MongoStore.create({
				mongoUrl: require("./db-connect").mongoUrl, //mongodb+srv://__DB_USER:__DB_PASSWORD@__DB_HOST/__DB_NAME
				collectionName: "sessions",
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7,
			},
		})
	);

	
	app.use("/public", publicRouter);
	
	app.use(pagesRouter);

	app.use("/api/user", userRouter);
}

module.exports = { config };
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", {
		title: "Forumo aplikacija",
		username: "Justelio19",
		list: ["Product1", "Product2", "Milk", "Choclate"],
	});
});

router.get("/register", (req, res) => {
	res.render("register");

});

module.exports = router;
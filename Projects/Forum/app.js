const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(`mongodb+srv://AusraZun:a142CPK@forum.y3j7fu5.mongodb.net/forumhub`);
const db = mongoose.connection;

db.on('errpr', (error) =>{
    console.log('erroras:'+ error);
})
db.once('open', ()=> {
    console.info( 'Prie duomenų bazės buvo prisijungta sėkmingai')
})

app.set("view engine", "ejs");

const publicRouter = express.Router();
publicRouter.use(express.static('public'));
app.use('/public', publicRouter);

app.get("/", (req, res) => {
    res.render("index", {
        title: "Forumo aplikacija",
        username: "gfdgdf",
        list: ['Product1', 'Product2', 'Milk', 'Sugar']
    });
});

app.get('/register', (req, res)=>{res.render('register');}
)

app.listen(3000, ()=>{
    console.log("Serveris paleistas, jo adresas: http://localhost/");
})
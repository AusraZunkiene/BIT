const express = require('express');
const app = express();

require('./config/db-connect').config();
require('./config/express-middlewares').config(app);


// app.get("/", (req, res) => {
//     res.render("index", {
//         title: "Forumo aplikacija",
//         username: "gfdgdf",
//         list: ['Product1', 'Product2', 'Milk', 'Sugar']
//     });
// });

// app.get('/register', (req, res)=>{res.render('register');}
// )
// app.get('/login', (req, res)=>{res.render('login');}
// )
// app.get('/about', (req, res)=>{res.render('about');}
// )
// app.get('/news', (req, res)=>{res.render('news');}
// )
// app.get('/theme', (req, res)=>{res.render('theme');}
// )

app.listen(3000, ()=>{
    console.log("Serveris paleistas, jo adresas: http://localhost/");
})
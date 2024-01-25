const mongoose = require('mongoose');
require("dotenv").config();

function config(){
    mongoose.connect(process.env.MONGO_CONNECTION
    .replace('__DB_USER', process.env.DB_USER)
    .replace('__DB_PASSWORD', process.env.DB_PASSWORD)
    .replace('__DB_HOST', process.env.DB_HOST)
    .replace('__DB_NAME', process.env.DB_NAME));

const db = mongoose.connection;

db.on('errpr', (error) =>{
    console.log('erroras:'+ error);
})
db.once('open', ()=> {
    console.info( 'Prie duomenų bazės buvo prisijungta sėkmingai')
})}

module.exports = {config};



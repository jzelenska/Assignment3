// npm init
// npm install
// npm i express
// npm i dotenv 
// npm i mongoose
// npm i nodemon
// node index (connected server to the specified port)
// npm i ejs
// npm i cookie-parser

const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const db_connect = require('./config/db');
db_connect();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./config/Routes');

app.listen(port, () => console.log("Server connected on port ", port));

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use(routes)



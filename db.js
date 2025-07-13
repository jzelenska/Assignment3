//IP address (31.187.151.156) 
const mongoose = require('mongoose');

require("dotenv").config();
const db_url = process.env.DB_URL;

const db_connect = () => {
    mongoose
    .connect(db_url)
    .then(()=>console.log('Database is connected'))
    .catch(err=>console.log(err));
};

module.exports = db_connect;
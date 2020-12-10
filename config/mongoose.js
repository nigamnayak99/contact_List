const mongoose = require('mongoose');//mongoose library imported
mongoose.connect('mongodb://localhost/contacts_list_db');//connect mongoose to database
const db = mongoose.connection;//this connection is database
db.on('error', console.error.bind(console, 'connection error:'));//if error occurs, error is handled
db.once('open',function(){ //if connection is successfull
    console.log("successfully connected to db");
})
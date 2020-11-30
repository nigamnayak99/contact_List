 const express = require('express');//importing the dependency library
 const path = require('path');
 const port = 8000;// defining port number

 const app = express();// Creating object of express
app.set('view engine','ejs');//making node know that view engine is ejs
app.set('views',path.join(__dirname,'views'));//Setting path for view engine



//////------Controller part Starts Here ------//////
 app.get('/',function(req,res){
    return res.render('home');//we must return from here by rendering html file
    //other wise it will keep searching ...
    //res.send("YEY !");
    //console.log(req.url);
});

//////------Controller part Ends  Here ------//////

 app.listen(port,function(err){//make the server listen 
     if(err){
         console.log("error running on server",err);
     }
     console.log("Server is running on port :",port);
 });

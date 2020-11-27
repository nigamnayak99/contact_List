 const express = require('express');//importing the dependency library
 const port = 8000;// defining port number

 const app = express();// Creating object of express

 app.get('/',function(req,res){
    res.send("YEY !");
     console.log(req.url);
});



 app.listen(port,function(err){//make the server listen 
     if(err){
         console.log("error running on server",err);
     }
     console.log("Server is running on port :",port);
 });

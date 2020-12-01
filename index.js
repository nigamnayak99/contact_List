 const { response } = require('express');
const express = require('express');//importing the dependency library
 const path = require('path');
 const port = 8000;// defining port number

 const app = express();  // Creating object of express
app.set('view engine','ejs');  //making node know that view engine is ejs
app.set('views',path.join(__dirname,'views'));  //Setting path for view engine

var contactList = [
    {
        name : "Nigam ",
        phone : "8658261067"

    },
    {
        name : "Nigam 2 ",
        phone : "8658261067 2"

    },
    {
        name : "Nigam 3",
        phone : "86582610673"

    }

]
//this is variable that is send as an object to view


//////------Controller part Starts Here ------//////
app.get('/',function(req,res){
    return res.render('home',{
                        title: "Nigam",//title is send here
                        contact_list:contactList // contact is send here
                    });
    /*we must return from here by rendering html file
    other wise it will keep searching ...
    and we must set a java script object along with 
    rendered view file(html file) to make web site dynamic 
    java script object will be sent to browser .
    In the dynamic ejs(html) file when key of js will be there ,
    upon rendering value of corresponding key will be replaced .
    */


    //res.send("YEY !");
    //console.log(req.url);
});



app.get('/practice',function(req,res){
    return res.render('practice',
    {
        title:"Practice"
    }
    );
});
//above controller is for practice view




app.post('/create-contact',function(req,res){
    return res.redirect('/');

});
//////------Controller part Ends  Here ------//////

 app.listen(port,function(err){   //make the server listen 
     if(err){
         console.log("error running on server",err);
     }
     console.log("Server is running on port :",port);
 });

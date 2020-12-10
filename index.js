 const { response } = require('express');
const express = require('express');//importing the dependency library
 const path = require('path');
 const port = 8000;// defining port number
 const db = require('./config/mongoose');
 const Contact = require('./models/contact');

 const app = express();  // Creating object of express,firing up express server
app.set('view engine','ejs');  //making node know that view engine is ejs
app.set('views',path.join(__dirname,'views'));  //Setting path for view engine
app.use(express.static('assets'));//defines the static path to ejs.
app.use(express.urlencoded());//it is middleware parser.

app.use(function(req,res,next){ //middlewire example
 console.log("middlewire called");
 next();
});
var contactList = [
    {
        name : "Nigam ",
        phone : "8658261067"

    },
    {
        name : "Nigam 2 ",
        phone : "86582610672"

    },
    {
        name : "Nigam 3",
        phone : "86582610673"

    }

]
//this is variable that is send as an object to view


//////------Controller part Starts Here ------//////
app.get('/',function(req,res){

    Contact.find({},function(err,contacts){//fetching from db
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home',{
            title: "Nigam",//title is send here
            contact_list:contacts // contact is send here
        });
    });
    // return res.render('home',{
    //                     title: "Nigam",//title is send here
    //                     contact_list:contactList // contact is send here
    //                 });
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

app.get('/delete-contact',function(req,res){
    //find the document by id
       let id = req.query.id;
    //delete the document
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error");
            return;
        }
        return res.redirect('back');

    });
       

});


app.post('/create-contact',function(req,res){
            // contactList.push(
            //     {
            //         name:req.body.name,
            //         phone:req.body.phone
            //     });

            // contactList.push(req.body);
            Contact.create({
                name:req.body.name,
                phone:req.body.phone
            },function(err,newContact){
            if(err){
                console.log("error in creating a contact");
                return;}

                console.log("***********",newContact);
                return res.redirect('/');
            });
        //the data is collected,parsed and pushed to local array


});



//////------Controller part Ends  Here ------//////

 app.listen(port,function(err){   //make the server listen 
     if(err){
         console.log("error running on server",err);
     }
     console.log("Server is running on port :",port);
 });

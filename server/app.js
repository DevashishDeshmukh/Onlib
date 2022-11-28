const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

dotenv.config({path : './config.env'});
require('./db/conn');
const port = process.env.PORT;

const Users = require('./models/userSchema');
const Books = require('./models/addBook');
const IssuedBooks = require('./models/issueBook');

//this method is used to get data and cookie from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors());
  
//register   
app.post('/register',async (req, res) =>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
           username : username,
           email : email,
           password : password
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/addbook',async (req, res) =>{
    try {
        const bookname = req.body.bookname;
        const authname = req.body.authname;
        const pubname = req.body.pubname;
        const ISBN = req.body.ISBN;
        const bookprice = req.body.bookprice;
        const availbooks = req.body.availbook;

        const createUser = new Books({
            bookname : bookname,
            authname : authname,
            pubname : pubname,
            ISBN : ISBN,
            bookprice : bookprice,
            availbooks : availbooks
    });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error);
    }
})
  let issuebookname = "";
  let issueauthname = "";

app.post('/issuebook',async (req, res) =>{
    try {
        const bookname = req.body.bookname;
        const authname = req.body.authname;
        const pubname = req.body.pubname;
        const ISBN = req.body.ISBN;
        const borrowname = req.body.borrowname;
        const borrownum = req.body.borrownum;
        const borrowadd = req.body.borrowadd;
        issuebookname = bookname;
        issueauthname = authname;
        const createUser = new IssuedBooks({
            bookname : bookname,
            authname : authname,
            pubname : pubname,
            ISBN : ISBN,
            borrowname : borrowname,
            borrownum : borrownum,
            borrowadd : borrowadd,    
    });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error);
    }
})

let temp = "";

app.get("/issuebook", (req, res) => { 
     
    Books.find({$and: [{"bookname": issuebookname},{"authname": issueauthname}]}, {"availbooks":1,"_id":0}, function(err, docs) {
        if(!err){
           res.send(docs);
           temp = JSON.stringify(docs);
           var t = "";
           var k = '"';
           for(var i = 0; i < 4; i++){
            // var ans = temp.slice(16, i).localeCompare(k); 
            // console.log(k);
            var faltu = temp.slice(16+i, 16+i+1); 
            if(faltu == k){
                // console.log("bye");
                break;
            }else{
                // console.log("hello");
                t = t + temp.slice(16+i, 16+i+1);
            }
           }
           var val = parseInt(t);
           var v = val - 1;
    Books.updateOne({"bookname": issuebookname}, {"availbooks" : v}, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });

        }else{
           console.log("Error in retrieving book list :" +err);
        }
       }).lean();
});

app.get("/viewbook", (req, res) => { 
    Books.find({}, function(err, docs) {
     if(!err){
        res.send(docs);
        console.log(docs);
     }else{
        console.log("Error in retrieving book list :" +err);
     }
    }).lean();
});

app.get("/viewissuebook", (req, res) => { 
    IssuedBooks.find({}, function(err, docs) {
     if(!err){
        res.send(docs);
        console.log(docs);
     }else{
        console.log("Error in retrieving issued abook list :" +err);
     }
    }).lean();
});

app.post('/returnedbook',async (req, res) =>{

        const bookname = req.body.bookname;
        const authname = req.body.authname;
        const borrowname = req.body.borrowname;
       
        Books.find({$and: [{"bookname": bookname},{"authname": authname}]}, {"availbooks":1,"_id":0}, function(err, docs) {
            if(!err){
               res.send(docs);
               temp = JSON.stringify(docs);
               var t = "";
               var k = '"';
               for(var i = 0; i < 4; i++){
                // var ans = temp.slice(16, i).localeCompare(k); 
                // console.log(k);
                var faltu = temp.slice(16+i, 16+i+1); 
                if(faltu == k){
                    break;
                }else{
                    // console.log("hello");
                    t = t + temp.slice(16+i, 16+i+1);
                }
               }
               var val = parseInt(t);
               var v = val + 1;
        Books.updateOne({"bookname": bookname}, {"availbooks" : v}, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
          });
        }else{
            console.log("Error in update book list :" +err);
         }
        }).lean();

        IssuedBooks.deleteOne({$and: [{"bookname": bookname},{"authname": authname}, {"borrowname": borrowname}]}, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
          });   

})


//login
app.post('/login', async (req, res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //find User if exists
        const user = await Users.findOne({email : email});
        if(user){
            //verify password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //generate token mentioned in schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                   
                    //expire token in 24hrs
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                });

                res.status(200).send("Logged in");
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
        
    }
});
    
app.listen(port, ()=>{
    console.log("Server is Running Successfully.")
});
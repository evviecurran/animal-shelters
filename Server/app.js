// Import all dependencies

const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File + require connection file

const db = require('./db/connection');

const port = process.env.PORT;

// Require Model
// const Users = require('./models/userSchema');

// This gets data + cookies from the front end 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.get('/', (req, res)=> {
    res.send("Hello World");
})

// Registration 
// app.post('/register', async (req,res)=>{
//     try {
//         // Get body or data
//         const username = req.body.username;
//         const email = req.body.email; 
//         const password = req.body.password; 
// const createUser = new Users({
//     username : username, 
//     email: email, 
//     password: password
// });

// // THis save method is used to create or insert a user
// // Before saving or inserting, the password will hash- because of what is placed in userSchema
//     const created = await createUser.save();
//     console.log(created);
//     res.status(200).send("Registered");

//     } catch (error) {
//         res.status(400).send(error)
//     }
// })
db.once ("open", ()=> {
// Run server 
app.listen(port, ()=> {
    console.log("Server is Listening")
})

})

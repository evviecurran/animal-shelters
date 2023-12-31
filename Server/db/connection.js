// const mongoose = require('mongoose');

// const db = process.env.DATABASE;

// mongoose.connect(db, {
//     userNewUrlParser : true,
//     useUnifiedTopology: true
// }) .then (()=> {
//     console.log("Connection Successful");

// }).catch((e) =>{
//     console.log(e);
// })

const mongoose = require('mongoose');
require('dotenv').config();
const user = process.env.mongoUser;
const pass = process.env.mongoPass;
console.log(user, pass);
const url = `mongodb+srv://${user}:${pass}@cluster1.yvsomvf.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.then(console.log('connecting'))
.catch(err => console.log(`error: ${err}`));


module.exports = mongoose.connection ; 
const express = require('express')
const mysql = require('mysql')
const path = require('path');
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const app = express();
const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.static('./client/build'))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'avinash@123',
    database:'apartment_db',
    multipleStatements: true
})

connection.connect(function(err){
    (err)? console.log(err):console.log("cnnected")

})

require('./routes/html-routes')(app,connection)

app.listen(PORT,()=>{
  console.log(`App running on port ${PORT}` );
})
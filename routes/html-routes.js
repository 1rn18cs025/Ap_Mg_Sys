const bcrypt = require('bcrypt')
require('dotenv').config();
const mysql = require('mysql')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const config = require('config')
module.exports = function(app,connection){
    app.post('/login',(req,res) =>{
        console.log('avinshsdds')
        var sql = "SELECT * FROM USERS;"
        connection.query(sql,async function(err,data){
            const valid =  await bcrypt.compare(req.body.password,data[0].password)

            if((req.body.name== data[0].name)&&valid){
                const token =  jwt.sign(req.body,process.env.PRIVATE_KEY)
                // sessionStorage.setItem('token', token.text())
                res.cookie("token", token, {
                    httpOnly: true
                })
                res.json({sucess: true})   

            }
            else{

                res.send('')
            }
           
        })
        })

        // if ((req.body.name == 'Avinash') & (req.body.password == '12345678')){
        //     const token = jwt.sign(req.body,process.env.PRIVATE_KEY)
            
        //     res.send(token)
        // }
    app.get('/logout', (req,res) => {
        console.log("sdsdsds");
         res.clearCookie('token');
         res.end();
     })   
    app.get('/view_residents',auth,(req,res) =>{
        var sql = "SELECT * FROM resident;"
        connection.query(sql,async function(err,data){
            res.json(data)
            
        })
        // console.log("token",res.cookies.token);
    })
    app.get('/view_flat',auth,(req,res) =>{

        var sql = "SELECT * FROM flat;"
        connection.query(sql,function(err,data){
            res.json(data)  
        })
    })
    app.get('/view_staff',auth,(req,res) =>{

        var sql = "SELECT * FROM staff;"
        connection.query(sql,function(err,data){
            res.json(data)  
        })
    })
    app.get('/view_bills',auth,(req,res) =>{

        var sql = "SELECT * FROM bill;"
        connection.query(sql,function(err,data){
            res.json(data)  
        })
    })
    app.get('/view_complains',auth,(req,res) =>{

        var sql = "SELECT * FROM complain;"
        connection.query(sql,function(err,data){
            res.json(data)  
        })
    })

    app.post('/insert_resident',auth,(req,res) =>{
        // res.send(req.body)

        var sql = "CALL insert_resident(?,?,?,@output); SELECT @output As output;";
        connection.query(sql,[req.body.name,req.body.aadhar,req.body.phone],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    app.post('/insert_staff',auth,(req,res) =>{
        // res.send(req.body)

        var sql = "CALL insert_staff(?,?,?);";
        connection.query(sql,[req.body.name,req.body.aadhar,req.body.phone],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    app.post('/insert_flat',auth,(req,res) =>{
        // res.send(req.body)

        var sql = "CALL insert_flat(?,?);";
        connection.query(sql,[req.body.f_id,req.body.f_size],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    app.post('/insert_bill',auth,(req,res) =>{
        // res.send(req.body)

        var sql = "CALL insert_bill(?,?,?,?);";
        connection.query(sql,[req.body.electricity,req.body.water,req.body.r_id,req.body.f_id],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    app.post('/insert_complain',auth,(req,res) =>{
        // res.send(req.body)

        var sql = "CALL insert_complain(?,?);";
        connection.query(sql,[req.body.subject,req.body.f_id],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    
    app.post('/delete_resident',auth,(req,res) =>{

        var sql = "CALL delete_resident(?);";
        connection.query(sql,[req.body.r_id],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    
    app.post('/delete_staff',auth,(req,res) =>{

        var sql = "CALL delete_staff(?);";
        connection.query(sql,[req.body.s_id],function(err,data){
            (err)?res.send(err):res.json(data);
        })
    })
    // app.get('/insert_bill',(req,res) =>{

    //     var sql = "INSERT INTO bill (r_id,f_id,amount,is_paid) VALUES ()"
    //     connection.query(sql,function(err,data){
    //         (err)?res.send(err):res.json(data);
    //     })
    // })
    // app.get('/update_bill',(req,res) =>{

    //     var sql = "UPDATE bill SET is_paid=1 WHERE f_id"
    //     connection.query(sql,function(err,data){
    //         (err)?res.send(err):res.json(data);
    //     })
    // })
    // app.get('/insert_staff',(req,res) =>{

    //     var sql = "INSERT INTO resident (name, phone,aadhar_id,f_id) VALUES ('honey', '333474','3330353575',2)"
    //     connection.query(sql,function(err,data){
    //         (err)?res.send(err):res.json(data);
    //     })
    // })
    
    // app.get('/update_staff',(req,res) =>{

    //     var sql = "UPDATE bill SET is_paid=1 WHERE f_id"
    //     connection.query(sql,function(err,data){
    //         (err)?res.send(err):res.json(data);
    //     })
    // })
    
    // app.get('/update_staff',(req,res) =>{

    //     var sql = "UPDATE bill SET is_paid=1 WHERE f_id"
    //     connection.query(sql,function(err,data){
    //         (err)?res.send(err):res.json(data);
    //     })
    // })
    
}

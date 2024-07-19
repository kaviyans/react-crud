const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const p = 8081;

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "myadmin",
    password : "kavi@2210#",
    database:"crud"
})

app.get("/",(req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql,(err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create',(req,res)=>{
    const sql = 'INSERT INTO student(`Name` , `Email`) VALUES(?)';
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql , [values] , (err,data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.put('/update/:id', (req , res)=>{
    const sql = "update student set `Name` = ? , `Email` = ? where ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id

    db.query(sql , [...values, id] , (err,data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.delete('/delete/:id' , (req,res) =>{
    console.log("hello wolrd")
    const sql = 'DELETE FROM student WHERE ID = ?';
    const id = req.params.id;

    db.query(sql,[id], (err,data) =>{
        if(err) return res.json("error");
        return res.json(data);
    })
})


app.listen(p,() =>{
    console.log(`listening ${p}`);
})
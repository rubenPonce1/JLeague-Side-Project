import express from "express";
import mysql2 from "mysql2"



const app = express()



const db = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password:"hjkyui123",
    database:"JLeague",
    
    
})



app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/teams", (req,res)=>{
    const q = "SELECT * FROM teams"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post

app.listen(8800, () => {
    console.log("Connected to backend!")
})
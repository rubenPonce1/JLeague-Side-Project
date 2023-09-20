import express from "express";
import mysql2 from "mysql2"
import cors from "cors";



const app = express()



const db = mysql2.createConnection({
    host: "localhost",
    user:"root",
    password:"hjkyui123",
    database:"JLeague",
    
    
});

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is the backend")
});

app.get("/teams", (req,res)=>{
    const q = "SELECT * FROM teams"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    });
});

app.post("/teams", (req, res) =>{
    const q = "INSERT INTO teams (`TeamName`, `teamInfo`, `teamImg`) VALUES (?)";
    const values = [
        req.body.TeamName,
        req.body.teamInfo,
        req.body.teamImg,
    ];

    db.query(q, [values] ,(err, data) => {
        if(err) return res.json(err)
        return res.json("Team has been created succesfully.")
    });

});

app.listen(8800, () => {
    console.log("Connected to backend!")
})
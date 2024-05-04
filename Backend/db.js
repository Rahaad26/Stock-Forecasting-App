// const express=require('express')
import express from "express";
import mysql from "mysql";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  methods:["POST","GET"],
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
      secure:false,
      maxAge:1000*60*60*24
    }
}))
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stockforcasting",
});



app.post("/signup", (req, res) => {
  const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error in MySQL:", err);
      return res.status(500).json({ error: "Error in database" });
    }

    return res.status(201).json({ message: "User signed up successfully" });
  });
});



app.post("/login", (req, res) => {
  const sql = "SELECT *FROM user WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, result) => {

    if (err) return res.json({ Message: "Error inside server" });
    
    if (result.length > 0) {
      req.session.username= result[0].name;
      req.session.userid= result[0].user_id;
      req.session.useremail= result[0].email;
      console.log(req.session.username +" "+ req.session.userid +" "+ req.session.useremail);
      return res.json({Login: true, username: req.session.username,userid: req.session.userid,useremail: req.session.useremail})
    }
    else return res.json({ Login: false})
  });
});

app.get('/',(req, res) => {
  if (req.session.username){
    return res.json({valid: true, username: req.session.username,userid: req.session.userid,useremail: req.session.useremail})
  }else{
    return res.json({valid: false})
  }

})

app.get("/users", (re, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.listen(8081, () => {
  console.log("Connected to the server");
});

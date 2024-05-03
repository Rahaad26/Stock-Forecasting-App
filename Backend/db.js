// const express=require('express')
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'stockforcasting'
})
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    console.log(name + ' ' + email + ' ' + password)
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    const values = [name, email, password];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error in MySQL:', err);
        return res.status(500).json({ error: 'Error in database' });
      }

      return res.status(201).json({ message: 'User signed up successfully' });
    });
  });
  
app.get('/users', (re,res)=>{
    const sql ="SELECT * FROM user";
    db.query(sql, (err,data)=>{
        if (err) return res.json(err);
        return res.json(data);
    });

})
app.listen(8081,()=>{
    console.log("Connected to the server");
 })
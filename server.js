const express = require('express'); // Import express
const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config()//Configure dotenv




const app = express()// Use it 
const port = 4000; // Port where our server will run

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
})
//Now we connect
db.connect((err) => {
  if(err) {
    console.log("Error connecting to the db",err.message)
  } else {
    console.log("Database Connected Successfully")
  }
})

const CreateUsers = "CREATE TABLE IF NOT EXISTS Users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";

db.query(CreateUsers, (err) => {
  if (err){
    console.log("Error creating the table", err.message)
  }
  else {
    console.log("Table Created Successfully")
  }
})

app.get('/', (req, res) => { // Landing page sending a request and receiving a response
  res.send("Testing if it works");
})

app.listen(port, () => { // It's taking a function
  console.log(`Server is running at localhost://${port}`)
})

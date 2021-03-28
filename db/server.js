const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
  host :'localhost',
  user :'root',
  password:'1234abcd',
  });
  
  // connect 
  db.connect((err) => {
    if(err){
    throw err;
    }
    console.log('MySql Connected ....');
    
    });

const app = express();
// create DB 
app.get('/createDb', (req, res) => {
  let sql = 'CREATE Employee database';
  db.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Database created...');
  });
});

app.listen('3000', () => 
{
  console.log('server started on port 3000');
});

// Get all employees 
//app.get('/api/employees', (req, res) => {
  //const sql =  //bring up employees//;
  //const params = [];
  //db.all(sql, params, (err, rows) => {
    //if (err) {
      //res.status(500).json({ error: err.message });
      //return;
    //}

 //   res.json({
   //   message: 'success',
     // data: rows
    //});
  //});
//});
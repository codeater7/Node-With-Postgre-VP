const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/dbconfig');

const app = express();
app.use(bodyParser.json());
const port = 3000;


app.get('/', (req, res)=>{
    res.send("This is it")
})

// Get all movies
app.get("/api/movies", (req, res) => {
  db.query('SELECT * FROM movies', (err, result) => {
     if (err)
       console.error(err);
     else
       res.json(result.rows) // result.rows then contains the actual result that is in this case an array of movies
  })
})

// Get movie by id
app.get("/api/movies/:id", (req, res) => {
    const query = {
      text: 'SELECT * FROM movies WHERE id = $1',
      values: [req.params.id],
    }

    db.query(query, (err, result) => {
        if (err) {
          return console.error('Error executing query', err.stack)
       }
       else {
         if (result.rows.length > 0)
           res.json(result.rows);
         else
           res.status(404).end();
       }
      })
  
  })









app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
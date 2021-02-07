const express = require('express');
const query = require('./db/movies');

//const bodyParser = require('body-parser');

const app = express();
 
app.use(express.json())
app.use(express.urlencoded({extended:true}));


// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json({ type: 'application/*+json' }));






  




const port = 3000;


app.get("/api/movies", query.getAllMovies);
app.get("/api/movies/:id", query.getMovieById);
app.post("/api/movies", query.addMovie);
app.delete("/api/movies/:id", query.deleteMovie);
app.put("/api/movies/:id", query.updateMovie);











app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

module.exports = app;
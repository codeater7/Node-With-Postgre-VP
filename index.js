const express = require('express');
const query = require('./db/movies');
const auth = require('./services/authenticate');

//const bodyParser = require('body-parser');

const app = express();
 
app.use(express.json())
app.use(express.urlencoded({extended:true}));


process.env.SECRET_KEY = "5b1a3923cc1e1e19523fd5c3f20b409509d3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84d";


// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json({ type: 'application/*+json' }));






  




const port = 3000;


app.get("/api/movies", query.getAllMovies);
app.post("/api/movies",  query.addMovie);
app.delete("/api/movies/:id",  query.deleteMovie);
app.put("/api/movies/:id", query.updateMovie);

app.post("/login", auth.login);











app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

module.exports = app;
const { Pool } = require('pg')

const pool = new Pool({
  user: "sujan",
  host: "localhost",
  port: 5432,
  database: "movie",
  password: "YOUR_DB_PASSWORD"
})


module.exports = {
  query: (text, params) => pool.query(text, params),
}



//With the Pool module we can configure and create connection pools to our Postgres SQL database.

// We also name it to query that actually then invokes node-postgres 



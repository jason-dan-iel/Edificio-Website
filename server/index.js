const express = require("express");
const app = express();
const connect = require('./helpers/databaseConfig')
const cors = require('cors');

// Import routes
const authRoute = require('./routes/auth');


// Middleware 
app.use(express.json());
const Options = {
    origin: 'https://www.edificioiitj.org.in/',
  optionsSuccessStatus: 200, 
//   Access-Control-Allow-Origin: *

}
app.use(cors(Options));

// Route middleware
app.use('/api/user', authRoute);


// database connect
connect();


app.listen(3000, () => {
  console.log("Server running");
});
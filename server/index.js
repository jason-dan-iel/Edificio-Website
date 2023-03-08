const express = require("express");
const app = express();
const connect = require('./helpers/databaseConfig')
const cors = require('cors');

// Import routes
const authRoute = require('./routes/auth');
const Event = require('./routes/registerEvent')


// Middleware 
app.use(express.json());
app.use(cors());

// Route middleware
app.use('/api/user', authRoute);
app.use('/api/events', Event);


// database connect
connect();


app.listen(3000, () => {
  console.log("Server running");
});
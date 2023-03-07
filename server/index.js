const express = require("express");
const app = express();
const connect = require('./helpers/databaseConfig')
const cors = require('cors');

// Import routes
const authRoute = require('./routes/auth');


// Middleware 
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Route middleware
app.use('/api/user', authRoute);


// database connect
connect();


app.listen(3000, () => {
  console.log("Server running");
});
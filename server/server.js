const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')
const port = process.env.PORT || 8000

// global middleware 
app.use(bodyParser.json())
app.use(cors());


// importing all the routes 


app.listen(port, ()=>{
    console.log("Server is listening on port 8000");
})
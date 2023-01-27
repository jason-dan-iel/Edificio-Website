const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connect = require('./helpers/databaseConfig')
require('dotenv/config')
const port = process.env.PORT || 8000


// global middleware 
app.use(bodyParser.json())
app.use(cors());


// importing all the routes 
const teamRoute = require('./routes/teamRoute.js')
const authRoute = require('./routes/authRoute')
const sponsorRoute = require('./routes/sponsorsRoute')
const eventsRoute = require('./routes/eventsRoute')


// defining the routs
app.use('/api/auth/', authRoute);
app.use('/api/coreTeam', teamRoute);
app.use('/api/sponsors', sponsorRoute);
app.use('/api/events', eventsRoute);


// connecting with the database 
connect()

app.listen(port, ()=>{
    console.log("The server is live on https://localhost:8000");
})
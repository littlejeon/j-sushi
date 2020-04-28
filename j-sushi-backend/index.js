// Import express
let express = require('express');
var cors = require('cors');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

app.use(cors());

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/jsushi', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false});

// ongoose.connect(process.env.test_db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
// app.use('/api', apiRoutes);
app.use('/', require('./controllers/contactController'));
app.use('/', require('./controllers/itemController'));
app.use('/', require('./controllers/locationController'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

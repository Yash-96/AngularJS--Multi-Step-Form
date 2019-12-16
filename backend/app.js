const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const profile = require('./routes/form.route'); // Imports routes for the products
const app = express();
let port = 1234;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use('/profile', profile);

// DB setup
let dev_db_url = 'mongodb+srv://yashankit:abcd1234@cluster0-k3pj0.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});















// Set up mongoose connection
// const mongoose = require('mongoose');
// let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
// let mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
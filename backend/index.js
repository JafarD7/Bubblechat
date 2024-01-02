const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy




const app = express();
const port = 9000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

const jwt = require('jsonwebtoken');

mongoose.connect(
    "mongodb+srv://jafardahod7:Jafar123@bubblechatdatabase.fy3ncil.mongodb.net/?retryWrites=true&w=majority",

).then(() => {
    console.log('Yess connected');

}).catch((err) => {
    console.log('Error', err);
});

app.listen(port, () => {
    console.log('Server running on port 9000');
})


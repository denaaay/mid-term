require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoStr = process.env.DATABASE_URL;

mongoose.connect(mongoStr);
const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});

db.once('connected', () => {
    console.log('database connected');
});

const routes = require('./routes/routes');
const app = express();

app.use(cookieParser());
app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`server run on port ${process.env.PORT}`);
})
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require("cors");
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//added routes
const itemsRouter = require('./routes/items');
const categoriesRouter = require('./routes/categories');


//db connection
const db = require("./configs/db.config");

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/items', itemsRouter(db));
app.use('/api/categories', categoriesRouter(db));


app.listen(8080, () => {
  console.log("server is running");
});


module.exports = app;

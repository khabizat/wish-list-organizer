const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const logger = require('morgan');
require('dotenv').config();


//added routes
const itemsRouter = require('./routes/items');
const categoriesRouter = require('./routes/categories');


//db connection
const db = require("./configs/db.config");

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/items', itemsRouter(db));
app.use('/api/categories', categoriesRouter(db));


app.listen(8080, () => {
  console.log("server is running");
});


module.exports = app;

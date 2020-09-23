const express = require('express');
// const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const api = require('./routes');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(logger("dev"));

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex: true, }, () => {
    console.log("Connected to db!");
    app.listen(4000, () => console.log("Server Up and running"));
});











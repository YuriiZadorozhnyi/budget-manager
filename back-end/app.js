// express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// mongoose
const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(config.getDbConnectionString());

// controllers
const middlewareController = require('./controllers/middleware-controller');
const authController = require('./controllers/auth-controller');
const transactionsController = require('./controllers/transactions-controller');

middlewareController(app);
authController(app);
transactionsController(app);

app.listen(port);

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const customerRouter = require('./routes/customer');
const cardRouter = require('./routes/card');
var debitRouter = require("./routes/debit_account")
var creditRouter = require("./routes/credit_account")
var transactionsRouter = require("./routes/transactions")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customer', customerRouter);
app.use('/card', cardRouter);
app.use("/debit", debitRouter);
app.use("/credit", creditRouter);
app.use("/transactions", transactionsRouter);
module.exports = app;

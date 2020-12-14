'use strict';

require('dotenv').config();

const server = require('./src/server');
server.start(process.env.PORT)

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('I am connected');
// });


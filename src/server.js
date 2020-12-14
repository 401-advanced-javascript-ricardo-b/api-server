'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

const recipeRoutes = require('./routes/recipeLog');
const gameInfoRoutes = require('./routes/gameInfo');

const mongoose = require('mongoose');
// const MONGOOSE_URI = 'mongodb://localhost:27017/apiServer';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(process.env.MONGOOSE_URI, options);

app.use(express.json()); //turns req.body into json
app.use(logger); //console logs routes and methods
app.use(recipeRoutes);
app.use(gameInfoRoutes);
app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: port =>{
    if(!port){
      throw new Error('Missing Port')
    }
    app.listen(port, ()=>{
      console.log(`Server Up, Port: ${port}`);
    })
  }
}
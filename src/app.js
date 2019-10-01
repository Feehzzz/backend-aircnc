require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${process.env.db_user}:${process.env.db_pass}@${process.env.db_host}`,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const app = express();


app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log('Up')
})
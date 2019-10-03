require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const path = require('path');
const app = express();


mongoose.connect(`mongodb+srv://${process.env.db_user}:${process.env.db_pass}@${process.env.db_host}`,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log('Connection established')
})
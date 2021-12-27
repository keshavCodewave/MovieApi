const express = require('express')
const app = express();
const mongoose = require('./src/models/db')
const PORT =  process.env.PORT
// const movie = require('./models/movie')
app.use(express.json());
const movieService = require('./src/services/movieServices')
const routes = require('./routes')
app.use(express.json())
require('dotenv').config()

app.use('/api', routes)

// app.listen(PORT,() => {
//     console.log(`Server is running on ${PORT}`);
// })

module.exports = app;
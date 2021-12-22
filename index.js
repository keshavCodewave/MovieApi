const express = require('express')
const app = express();
const PORT =  process.env.PORT || 3000;
const mongoose = require('mongoose')
// const movie = require('./models/movie')
app.use(express.json());
const movieService = require('./src/services/movieServices')
const routes = require('./routes')
app.use(express.json())

mongoose.connect('mongodb://localhost/learnJwt',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Db is connected");
})
.catch((error)=>{
    console.log(error);
});

app.use('/api', routes)

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
})
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Db is connected");
})
.catch((error)=>{
    console.log(error);
});

module.exports = mongoose
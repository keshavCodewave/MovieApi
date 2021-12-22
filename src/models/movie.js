const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const movieSchema = mongoose.Schema({
    movieName: {type:String,required: true, unique:true},
    movieActor: {type:String,required: true},
    movieType:{ type:String,enum:['funny','romantic','drama','action']},
    movieTrailer:{type: String,required: true},
    moviePoster:{type: String,required: true},
});

movieSchema.plugin(uniqueValidator);
const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie


// const Movie = require('../models/movie');
const movie = require('../models/movie')


exports.getAllMovie = async()=>{
    return await movie.find({});
}

exports.getOneMovie = async(id)=>{
    return await movie.findById(id)
}

exports.addMovie = async(data) =>{
    return await movie.create(data)
}

exports.updateMovie = async(id, data) =>{
    return await movie.findByIdAndUpdate(id, data)
}

exports.deleteMovie = async(id) =>{
    return await movie.findByIdAndDelete(id)
}
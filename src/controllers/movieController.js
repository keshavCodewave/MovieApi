const express = require('express')
const movieController = express.Router()
const movieService = require('../services/movieServices')
const {auth} = require('../middlewares/validation')


// Routes get all movie 
movieController.get('/moviename',auth, async(req,res)=>{
    try {
     const data = await movieService.getAllMovie()
     res.status(200).json({ 'status': 'success', statusCode: 200, response: data })
    } catch (error) {
     res.status(500).json({ 'status': 'failure', statusCode: 500, message: error.message })
    }
 })

 // Routes get one movie 
 movieController.get('/moviename/:id',auth, async(req,res)=>{
     try {
        const data = await movieService.getOneMovie(req.params.id)
        res.status(200).json({ 'status': 'success', statusCode: 200, response: data })
    } catch (error) {
     res.status(500).json({ 'status': 'failure', statusCode: 500, message: error.message })
    }
 })

 // Routes to post movie
 movieController.post('/moviename',auth, async(req,res)=>{
     try {
         const data = await movieService.addMovie(req.body)
         res.status(200).json({ 'status': 'success', statusCode: 200, response: data })
        } catch (error) {
         res.status(500).json({ 'status': 'failure', statusCode: 500, message: error.message })
        }
     })

// Routes to update movie
movieController.post('/moviename/edit',auth, async(req,res)=>{
    try {
        const data = await movieService.updateMovie(req.body._id, req.body)
        res.status(200).json({ 'status': 'success', statusCode: 200, response: data })
    } catch (error) {
     res.status(500).json({ 'status': 'failure', statusCode: 500, message: error.message })
    }
 })

 movieController.post('/movie-delete',auth, async(req,res)=>{
     try {
         const data = await movieService.deleteMovie(req.body._id)
                 res.status(204).json({ 'status': 'resource deleted successfully', statusCode: 204, response: data })
             } catch (error) {
                 res.status(500).json({ 'status': 'failure', statusCode: 500, message: error.message })
             }
         })
         
module.exports = movieController
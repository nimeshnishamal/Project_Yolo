const express = require('express')
const { set } = require('mongoose')
const router = express.Router()
const Game = require('../models/game')

// Getting all games details
router.get('/gameList', async (req, res) => {
    try {
        const gameList = await Game.find()
        res.json(gameList)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Getting a game details
router.get('/:id', async (req, res) => {
    const game = await Game.find({gameCode:req.params.id})
    res.json(game)
})

//add a game to list
router.post('/addGame', async (req, res) => {
    const game = new Game({
        gameCode: req.body.gameCode,
        gameName: req.body.gameName,
        gameCategory: req.body.gameCategory,
        gameRate: req.body.gameRate,
        creationDate: req.body.creationDate,
        gameDescription: req.body.gameDescription,
        isUnauthorized:  req.body.isUnauthorized,
        isSuitable: req.body.isSuitable
    })
    try {
        const newGame = await game.save()
        res.status(201).json(newGame)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// delete a game
router.delete('/deleteGame/:id', async (req, res) => {
    try {
        await Game.deleteOne({gameCode:req.params.id})
        res.json({ message: "Game Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// update a game details
router.patch('/updateGame/:id', getGame, async (req, res) => {
    if( req.body.gameCode != null ) {
        res.game.gameCode = req.body.gameCode
    }
    if( req.body.gameName != null ) {
        res.game.gameName = req.body.gameName
    }
    if( req.body.gameCategory != null ) {
        res.game.gameCategory = req.body.gameCategory
    }
    if( req.body.gameRate != null ) {
        res.game.gameRate = req.body.gameRate
    }
    if( req.body.creationDate != null ) {
        res.game.creationDate = req.body.creationDate
    }
    if( req.body.gameDescription != null ) {
        res.game.gameDescription = req.body.gameDescription
    }
    if( req.body.isUnauthorized != null ) {
        res.game.isUnauthorized = req.body.isUnauthorized
    }
    if( req.body.isSuitable != null ) {
        res.game.isSuitable = req.body.isSuitable
    }
    try {
        const updateGame = await Game.updateOne({gameCode:req.params.id},{ $set: {...res.game} })
        res.json(updateGame)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//middleware
async function getGame(req, res, next) {
    let game
    try {
        game = await Game.find({gameCode:req.params.id})
        if(game == null) {
            return res.status(404).json({ message: 'cannot find game' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.game = game
    next()
}


module.exports = router
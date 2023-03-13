const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all users details
router.get('/userList', async (req, res) => {
    try {
        const userList = await User.find()
        res.json(userList)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Getting a user details
router.get('/:id', async (req, res) => {
    const user = await User.find({userCode:req.params.id})
    res.json(user)
})

//add a user to list
router.post('/addUser', async (req, res) => {
    const user = new User({
        userCode: req.body.userCode,
        userFullName: req.body.userFullName,
        userEmail: req.body.userEmail,
        userTel: req.body.userTel,
        userBOD: req.body.userBOD,
        userDescription: req.body.userDescription,
        isUserHavePreviousExperenceInYolo:  req.body.isUserHavePreviousExperenceInYolo,
        isUserEstonianCitizen: req.body.isUserEstonianCitizen
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// delete a user
router.delete('/deleteUser/:id', async (req, res) => {
    try {
        await User.deleteOne({userCode:req.params.id})
        res.json({ message: "User Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// update a user details
router.patch('/updateUser/:id', getUser, async (req, res) => {
    if( req.body.userCode != null ) {
        res.user.userCode = req.body.userCode
    }
    if( req.body.userFullName != null ) {
        res.user.userFullName = req.body.userFullName
    }
    if( req.body.userEmail != null ) {
        res.user.userEmail = req.body.userEmail
    }
    if( req.body.userTel != null ) {
        res.user.userTel = req.body.userTel
    }
    if( req.body.userBOD != null ) {
        res.user.userBOD = req.body.userBOD
    }
    if( req.body.userDescription != null ) {
        res.user.userDescription = req.body.userDescription
    }
    if( req.body.isUserHavePreviousExperenceInYolo != null ) {
        res.user.isUserHavePreviousExperenceInYolo = req.body.isUserHavePreviousExperenceInYolo
    }
    if( req.body.isUserEstonianCitizen != null ) {
        res.user.isUserEstonianCitizen = req.body.isUserEstonianCitizen
    }
    try {
        const updateUser = await User.updateOne({userCode:req.params.id},{ $set: {...res.user} })
        res.json(updateUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//middleware
async function getUser(req, res, next) {
    let user
    try {
        user = await User.find({userCode:req.params.id})
        if(user == null) {
            return res.status(404).json({ message: 'cannot find user' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}


module.exports = router
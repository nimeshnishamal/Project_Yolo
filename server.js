require('dotenv').config()

const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors());
app.use(express.json())

const game = require('./src/app/backend/api/game')
app.use('/game', game)

const user = require('./src/app/backend/api/user')
app.use('/user', user)

app.listen(3000, () => console.log('Server started'))
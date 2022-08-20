const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const internalRouter = require('./routes/internal-router')
const externalRouter = require('./routes/external-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('eCommerce server')
})

app.use('/iapi', internalRouter)
app.use('/eapi', externalRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
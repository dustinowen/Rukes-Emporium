require('dotenv').config()
require('./config/mongo.connection')

const { PORT } = process.env

const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const app = express()
const productsRouter = require('./routes/products')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(morgan('dev'))

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.send("Uh oh - you've been led astray! Please visit out home page: rukes-emporium.netlify.com")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
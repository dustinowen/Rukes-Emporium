require('dotenv').config()
require('./config/mongo.connection')

const { PORT } = process.env

const express = require('express')
const app = express()
const productsRouter = require('./routes/products')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use(cors())
// app.use(morgan('dev'))

app.use('/products', productsRouter)




app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
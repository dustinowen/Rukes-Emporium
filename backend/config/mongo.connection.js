const mongoose = require('mongoose')
const { DATABASE_URI } = process.env

mongoose.set('strictQuery', true)
mongoose.connect(DATABASE_URI)

mongoose.connection.on('open', () => console.log("You are connected to mongoose"))
mongoose.connection.on('close', () => console.log("You are disconnected from mongoose"))
mongoose.connection.on('error', (error) => console.log(error))
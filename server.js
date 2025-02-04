const express =  require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const app = express()
const PORT = 3000
dotenv.config()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(authRoutes)

// console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL, {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
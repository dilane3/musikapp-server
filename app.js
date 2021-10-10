import {config} from 'dotenv'
import express from 'express'
import cors from 'cors'
import musikRouter from './routes/musik.js'
import mongoose from 'mongoose'

config()

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// connexion a la base de donnee
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connected to the database"))
.catch(err => console.log("error while connecting to the database"))

// creation of an instance of express app
const app = express()

// set engine
app.set("view engine", "ejs")

// use middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("uploads"))

// set up route
app.use("/api/musik", musikRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
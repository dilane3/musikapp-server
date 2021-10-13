import {config} from 'dotenv'
import express from 'express'
import cors from 'cors'
import musikRouter from './routes/musik.js'
import mongoose from 'mongoose'

config()

const {PORT, DATABASE_URL} = process.env

// connexion a la base de donnee
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connected to the database"))
.catch(err => console.log("error while connecting to the database"))

// creation of an instance of express app
const app = express()

// set engine
app.set("view engine", "ejs")

// use middlewares
const corsOptions = {
    origin: "*",
    credentials: true
}

app.use('/', cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/static", express.static("uploads"))

// set up route
app.use("/api/musik", musikRouter)

app.get('/', (req, res) => {
    console.log(req.protocol)
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
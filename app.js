import {config} from 'dotenv'
import express from 'express'
import cors from 'cors'
import multer from 'multer'
import musikRouter from './routes/musik.js'

config()

const PORT = process.env.PORT

// creation of an instance of express app
const app = express()

// set engine
app.set("view engine", "ejs")

// use middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// set up route
app.use("/api/musik", musikRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
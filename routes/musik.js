import express from 'express'
import {
    uploadMusik
} from '../controllers/musikController.js'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/upload', upload.single('audio'), uploadMusik)

export default router
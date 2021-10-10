import express from 'express'
import {
    uploadMusik,
    getMusiks
} from '../controllers/musikController.js'
import upload from '../helpers/upload.js'

const router = express.Router()

router.post('/upload', upload, uploadMusik)
router.get('/all', getMusiks)

export default router
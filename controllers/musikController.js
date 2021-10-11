import Musik from "../models/musik.js"

const uploadMusik = async (req, res) => {
    const {file} = req
    const {title, author} = req.body

    if (file && title.length > 0 && author.length > 0) {
        const filename = `http://localhost:5000/api/static/${req.file.filename}`
        const payload = {title, author, filename}

        const musik = new Musik(payload)

        try {
            // we save musik here in the database
            await musik.save()

            // generation of the filename for download
            const arrayOfString = musik.filename.split(".")
            const extension = arrayOfString[arrayOfString.length-1]

            const downloadName = `${musik.author}-${musik.title}.${extension}`

            return res.status(201).json({data: {...musik, downloadName}})
        } catch (err) {
            return res.sendStatus(500)
        }
    }

    return res.sendStatus(500)
}

const getMusiks = async (req, res) => {
    try {
        const musiks = await Musik.find()

        res.status(200).json({data: musiks})
    } catch (err) {
        res.sendStatus(500)
    }
}

export {
    uploadMusik,
    getMusiks
}
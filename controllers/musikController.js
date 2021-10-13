import Musik from "../models/musik.js"

const uploadMusik = async (req, res) => {
    const {file} = req
    const {title, author, category} = req.body

    if (file && title.length > 0 && author.length > 0 && category) {
        const filename = `${req.protocol}://${req.headers.host}/static/${req.file.filename}`

        // generation of the filename for download
        const arrayOfString = filename.split(".")
        const extension = arrayOfString[arrayOfString.length-1]

        const downloadName = `${author}-${title}.${extension}`
        const payload = {title, author, filename, category, downloadName}

        const musik = new Musik(payload)
        console.log(filename)

        try {
            // we save musik here in the database
            await musik.save()

            return res.status(201).json({data: musik})
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
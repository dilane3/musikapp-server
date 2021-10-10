import Musik from "../models/musik.js"

const uploadMusik = async (req, res) => {
    const {file} = req

    if (file) {
        const filename = `http://localhost:5000/static/${req.file.filename}`
        const payload = {
            title: "mon soleil",
            author: "dadju",
            filename
        }

        const musik = new Musik(payload)

        try {
            await musik.save()

            console.log(musik)

            return res.status(200).json({data: musik})
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
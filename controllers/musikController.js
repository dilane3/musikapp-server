const uploadMusik = (req, res) => {
    console.log(req.file)
    res.send("Ok")
}

export {
    uploadMusik
}
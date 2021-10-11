import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "--" + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    console.log(file)
    if(
        (file.mimetype).includes('ogg') || 
        (file.mimetype).includes('wav') || 
        (file.mimetype).includes('mpeg') ||
        (file.mimetype).includes('webm') ||
        (file.mimetype).includes('midi')
    ){
        cb(null, true);
    } else{
        cb(null, false);
    }
};

let upload = multer({storage: storage, fileFilter: fileFilter})

export default upload.single('audio')

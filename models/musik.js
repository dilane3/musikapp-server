import mongoose from "mongoose";

const {Schema} = mongoose

const musikSchema = new Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    filename: {type: String, require: true},
    image: {type: String, default: "default.png"},
    downloadName: {type: String, require: true},
    category: {type: String, default: "urbain"}
})

export default mongoose.model("musik", musikSchema)
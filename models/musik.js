import mongoose from "mongoose";

const {Schema} = mongoose

const musikSchema = new Schema({
    title: {type: String, require: true},
    author: {type: String, require: true},
    filename: {type: String, require: true},
    image: {type: String, default: "default.png"}
})

export default mongoose.model("musik", musikSchema)
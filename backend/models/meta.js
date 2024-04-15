import mongoose from "mongoose"

const MetaSchema = mongoose.Schema({
    objectType: {
        type: String,
        required: true
    },
    objectId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

export default mongoose.model("Meta", MetaSchema)
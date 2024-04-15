import mongoose from "mongoose"

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date
    }
})

export default mongoose.model("Task", TaskSchema)
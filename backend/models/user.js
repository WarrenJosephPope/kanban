import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date
    },
    updatedAt: {
        type: Date,
        default: new Date
    }
})

export default mongoose.model("User", UserSchema)
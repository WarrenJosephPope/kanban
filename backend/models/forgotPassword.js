import mongoose from "mongoose"

const ForgotPasswordSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    updatedAt: {
        type: Date,
        default: new Date
    }
})

export default mongoose.model("ForgotPassword", ForgotPasswordSchema)
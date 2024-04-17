import mongoose from "mongoose"

const ForgotPasswordSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

export default mongoose.model("ForgotPassword", ForgotPasswordSchema)
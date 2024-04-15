import mongoose from "mongoose"

const GroupsUsersSchema = mongoose.Schema({
    group: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

export default mongoose.model("GroupsUsers", GroupsUsersSchema)
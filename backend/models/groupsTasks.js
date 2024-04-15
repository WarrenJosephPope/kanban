import mongoose from "mongoose"

const GroupsTasksSchema = mongoose.Schema({
    group: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    task: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

export default mongoose.model("GroupsTasks", GroupsTasksSchema)
import mongoose from "mongoose"
import App from "./app.js"
import Log from "./helpers/log.js"

export default class Server {
    constructor(port, mongodbUri) {
        this.port = port
        this.mongodbUri = mongodbUri
    }

    listen() {
        this.app = new App()
        this.app.init()
        this.app.listen(this.port)
        this.app.route()
    }

    async connectMongoose() {
        try {
            await mongoose.connect(this.mongodbUri)
            console.log("Connected to MongoDB")
            Log.info("Connected to MongoDB")
        } catch (err) {
            console.log("Unable to connect to MongoDB. Please check the logs for more details")
            Log.error(err)
        }
    }

    init() {
        this.listen()
        this.connectMongoose()
    }
}
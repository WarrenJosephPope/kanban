import Server from "./server.js"
import { PORT, MONGODB_URI } from "./config.js"

const server = new Server(PORT, MONGODB_URI)
server.init()
import express from 'express'
import cors from 'cors'

export default class App {
    listen(port) {
        this.port = port
        this.app.listen(this.port, () => console.log(`Connected to port: ${this.port}`))
    }

    init() {
        this.app = express()
        this.app.use(cors())
    }
}
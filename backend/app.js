import express from 'express'
import cors from 'cors'
import Log from "./helpers/log.js"
import AuthRoutes from './routes/auth.js'

export default class App {
    listen(port) {
        this.port = port
        this.app.listen(this.port, () => {
            console.log(`Connected to port: ${this.port}`)
            Log.info(`Connected to port: ${this.port}`)
        })
    }

    route() {
        const authRoutes = new AuthRoutes()

        this.app.use('/auth', authRoutes.getRouter())
    }

    init() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(cors())
    }
}
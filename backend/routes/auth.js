import express from "express"
import AuthController from "../controllers/auth.js"

export default class AuthRoutes {
    constructor() {
        this.router = express.Router()
    }

    getRouter() {
        return this.router
            .post('/login', AuthController.login)
            .post('/register', AuthController.register)
            .post('/logout', AuthController.logout)
            .post('/forgot-password', AuthController.forgotPassword)
            .post('/reset-password/:token', AuthController.resetPassword)
    }
}
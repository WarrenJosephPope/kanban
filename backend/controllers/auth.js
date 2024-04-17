import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import crypto from "crypto"

import User from "../models/user.js"
import ForgotPassword from "../models/forgotPassword.js"

import Log from "../helpers/log.js"

import { JWT_SECRET } from "../config.js"

export default class AuthController {
    static hasKeys(obj) {
        return !!Object.keys(obj).length
    }

    static async login(req, res) {
        const body = req.body
        const error = {}

        if (!(body.email ?? false)) {
            error.email = "Please fill the email field"
        }

        if (!(body.password ?? false)) {
            error.password = "Please fill the password field"
        }

        if (AuthController.hasKeys(error)) return res.status(401).json({status: "Failed", error})

        const email = body.email
        const password = body.password

        const user = await User.findOne({ email })

        if (!user) return res.status(401).json({ status: "Failed", error: { email: "An account with this email does not exist." } })

        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ email, name: user.name }, JWT_SECRET, {})

            return res.status(200).json({ status: "Success", token })
        }
        return res.status(401).json({ status: "Failed", error: { password: "Wrong password entered" } })
    }

    static async logout(req, res) {

    }

    static async register(req, res) {
        const body = req.body
        const error = {}

        if (!(body.name ?? false)) {
            error.name = "Please fill the name field"
        }

        if (!(body.email ?? false)) {
            error.email = "Please fill the email field"
        }

        if (!(body.password ?? false)) {
            error.password = "Please fill the password field"
        }

        if (!(body.confirmPassword ?? false)) {
            error.confirmPassword = "Please fill the confirm password field"
        }

        if (AuthController.hasKeys(error)) return res.status(401).json({status: "Failed", error})

        if (body.password.length < 8) {
            error.password = "Password should be at least 8 characters long"
        }

        if (body.password !== body.confirmPassword) {
            error.confirmPassword = "Passwords do not match"
        }

        if (AuthController.hasKeys(error)) return res.status(401).json({status: "Failed", error})

        const checkUser = await User.findOne({ email: body.email })

        if (checkUser ?? false) {
            return res.status(401).json({ status: "Failed", error: { email: "A user with this email already exists" } })
        }

        const hashedPassword = bcrypt.hashSync(body.password, 10)
        
        try {
            const date = new Date()

            const user = new User({
                name: body.name,
                email: body.email,
                password: hashedPassword,
                createdAt: date,
                updatedAt: date,
            })

            user.save()
            Log.info(`New user registered with email: ${body.email}`)

            return res.status(200).json({ status: "Success", message: "User created successfully" })
        } catch (err) {
            Log.error(err)
            return res.status(500).json({ status: "Failed", message: "An error has occured" })
        }
    }

    static async forgotPassword(req, res) {
        const body = req.body

        if (!(body.email ?? false)) {
            return res.status(401).json({ status: "Failed", error: { email: "Please fill the email field" } })
        }

        const checkUser = await User.findOne({ email: body.email })

        if (!checkUser) return res.status(401).json({ status: "Failed", error: { email: "No user exists with this email in our system" } })

        const token = crypto.randomBytes(20).toString('hex')

        try {
            await ForgotPassword.findOneAndUpdate({ email: body.email }, { token }, { upsert: true })
            return res.status(200).json({ status: "Success", message: "An email has been sent to you containing information on how to reset your password" })
        } catch (err) {
            Log.error(err)
            return res.status(500).json({ status: "Failed", message: "An error has occured" })
        }
    }

    static async resetPassword(req, res) {

    }
}
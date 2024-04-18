import nodemailer from "nodemailer"
import { MAIL_OPTIONS } from "../config.js"

// function Mailer(subject = '', to = '', from = '', content = '') {
//     this.transport = nodemailer.createTransport(MAIL_OPTIONS.config)
//     this.subject = subject
//     this.from = from
//     this.to = to
//     this.content = content
// }

export default class Mailer {
    constructor(subject = '', content = '', to = '', from = '') {
        this.transport = nodemailer.createTransport(MAIL_OPTIONS.config)
        this.subject = subject
        this.content = content
        this.to = to
        this.from = from
    }

    setSubject(subject) {
        this.subject = subject
        return this
    }

    setContent(content) {
        this.content = content
        return this
    }

    setFrom(from) {
        this.from = from
        return this
    }

    setTo(to) {
        this.to = to
        return this
    }

    async send() {
        if (!(this.from ?? false)) {
            this.from = MAIL_OPTIONS.admin_email
        }
    
        await this.transport.sendMail({
            from: this.from,
            to: this.to,
            subject: this.subject,
            html: this.content
        })
    }
}
import fs from "node:fs"
import { LOG_PATH } from "../config.js"

export default class Log {
    static #fileName() {
        const dateObj = new Date()
        const date = dateObj.toISOString().split('T')[0]
        return `${date}-log.log`
    }

    static #composeMessage(level, message) {
        const dateObj = new Date()
        const time = dateObj.toTimeString().split(' ')[0]
        return `[${level}]\t${time} : ${message}\n`
    }

    static #logMessage(level, message) {
        const filename = Log.#fileName()
        const msg = Log.#composeMessage(level, message)

        fs.appendFileSync(`${LOG_PATH}${filename}`, msg)
    }

    static info(message) {
        Log.#logMessage("INFO", message)
    }

    static debug(message) {
        Log.#logMessage("DEBUG", message)
    }

    static error(message) {
        Log.#logMessage("ERROR", message)
    }
}
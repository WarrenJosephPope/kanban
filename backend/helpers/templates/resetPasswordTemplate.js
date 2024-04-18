import Template from "./template.js"
import Mustache from "mustache"
import fs from "node:fs"
import path from "node:path"

export default class ResetPasswordTemplate extends Template {
    constructor(data = {}) {
        super({ company: "Warren's Kanban Board", supportEmail: "support@kanban.com", ...data })
    }

    getContent() {
        const rootDir = path.resolve('./')
        const templateFile = fs.readFileSync(`${rootDir}/templates/resetPassword.html`, { encoding: "utf-8" })
        return Mustache.render(templateFile, this.data)
    }
}
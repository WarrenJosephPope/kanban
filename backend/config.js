import dotenv from "dotenv"

dotenv.config()

export const PORT = process.env.BACKEND_PORT ?? 8000
export const MONGODB_URI = process.env.MONGODB_URI ?? ""
export const LOG_PATH = process.env.LOG_PATH ?? "logs/"
export const JWT_SECRET = process.env.JWT_SECRET ?? ""
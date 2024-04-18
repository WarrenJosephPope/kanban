'use client'
import { useState } from "react"
import InputGroup from "../forms/InputGroup"
import Button from "../forms/Button"
import Form from "../forms/Form"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Form>
            <h1 className="text-center font-medium text-[1.5rem] text-white mb-2">Forgot your password?</h1>
            <InputGroup label="Email" type="email" placeholder="Enter your email" value={ email } update={ setEmail } />
            <Button>Reset password</Button>
        </Form>
    )
}
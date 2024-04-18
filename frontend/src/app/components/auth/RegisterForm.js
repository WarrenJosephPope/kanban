'use client'
import { useState } from "react"
import InputGroup from "../forms/InputGroup"
import Button from "../forms/Button"
import Form from "../forms/Form"
import Link from "next/link"

export default function LoginForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <Form>
            <h1 className="text-center font-medium text-[1.5rem] text-white mb-2">Create an account</h1>
            <InputGroup label="Name" type="name" placeholder="Enter your name" value={ name } update={ setName } />
            <InputGroup label="Email" type="email" placeholder="Enter your email" value={ email } update={ setEmail } />
            <InputGroup label="Password" type="password" placeholder="Enter your password" value={ password } update={ setPassword } />
            <InputGroup label="Re-type password" type="password" placeholder="Enter your password again" value={ confirmPassword } update={ setConfirmPassword } />
            <Button>Sign up</Button>
            <p className="text-center text-white text-[0.95rem]">Already have an account? Click <Link className="underline hover:text-gray-200 duration-200" href="/login">here</Link> to log in.</p>
        </Form>
    )
}
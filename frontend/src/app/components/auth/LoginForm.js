'use client'
import { useState } from "react"

import axios from "axios"

import InputGroup from "../forms/InputGroup"
import Button from "../forms/Button"
import Form from "../forms/Form"
import Link from "next/link"

export default function LoginForm() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const { data } = await axios.post(`${BASE_URL}/auth/login`)
            console.log(data)
        } catch (err) {
            console.log(err)
        }

        setLoading(false)
    }

    return (
        <Form handleSubmit={ handleSubmit } >
            <h1 className="text-center font-medium text-[1.5rem] text-white mb-2">Login to your account</h1>
            <InputGroup label="Email" type="email" placeholder="Enter your email" value={ email } update={ setEmail } />
            <InputGroup label="Password" type="password" placeholder="Enter your password" value={ password } update={ setPassword } />
            <Link className="text-white text-right underline hover:text-slate-200 duration-200" href="/forgot-password">Forgot Password?</Link>
            <Button loading={ loading }>Log in</Button>
            <p className="text-center text-white text-[0.95rem]">Don't have an account? Click <Link className="underline hover:text-gray-200 duration-200" href="/register">here</Link> to sign up.</p>
        </Form>
    )
}
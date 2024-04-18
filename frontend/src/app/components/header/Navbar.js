'use client'

import Link from "next/link"

export default function Navbar() {
    const menu = [
        {
            link: "/",
            name: "Home"
        },
        {
            link: "/login",
            name: "Login"
        },
        {
            link: "/register",
            name: "Register"
        }
    ]
    return (
        <nav className="h-full">
            <ul className="h-full flex items-center justify-start">
                {
                    menu.map((item, index) => (
                        <li className="px-4 self-stretch flex items-center justify-center" key={ index }><Link className="text-white hover:text-slate-300 duration-200" href={ item.link }>{ item.name }</Link></li>
                    ))
                }
            </ul>
        </nav>
    )
}
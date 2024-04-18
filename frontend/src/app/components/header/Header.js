import Link from "next/link"
import Navbar from "./Navbar"

export default function Header(props) {
    return (
        <header className="h-[5rem] bg-slate-700 px-5">
            <div className="max-w-[100rem] m-auto h-full flex items-center justify-between">
                <Link className="text-white font-bold text-[1.5rem]" href="/">Workflow Wise</Link>
                <Navbar />
            </div>
        </header>
    )
}
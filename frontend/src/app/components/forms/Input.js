export default function Input (props) {
    return (
        <input className="w-full px-4 py-2 bg-slate-800 text-white outline-none border border-gray-300 focus:border-gray-400 duration-200 rounded-md text-[1rem]" type={props.type ?? "text"} placeholder={props.placeholder ?? ""} value={ props.value } onInput={(e) => props.update(e.target.value)} />
    )
}
export default function Button(props) {
    return (
        <button disabled={ props.loading ?? false } className="w-full px-4 py-2 bg-slate-500 text-white hover:bg-slate-400 duration-200 rounded-md disabled:opacity-50 disabled:hover:bg-slate-500" type={ props.type ?? "submit" }>{ props.children }</button>
    )
}
export default function Label(props) {
    return (
        <label className="w-full flex items-start justify-start flex-col gap-[0.5rem]">
            <span className="text-[1rem] font-medium text-white">{ props.label }</span>
            { props.children }
        </label>
    )
}
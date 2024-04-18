export default function Form(props) {
    return (
        <form onSubmit={ props.handleSubmit } className="max-w-[30rem] w-full p-4 bg-slate-600 shadow-gray-400 shadow-md rounded-lg m-auto flex flex-col gap-[0.5rem]">{ props.children }</form>
    )
}
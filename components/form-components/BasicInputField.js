

export default function BasicInputField(props) {
    return (
        <div className="relative mt-4 mx-2 rounded-md border border-gray-300 px-3 py-1 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
            <label htmlFor={props.id} className="absolute -top-2.5 left-2 -mt-px inline-block bg-white px-1 text-sm font-medium text-gray-900">
                {props.label}
            </label>
            <div className="mt-1">
                <input
                    type={props.inputType}
                    name={props.name}
                    id={props.id}
                    className="block text-center w-full border-0 p-0 text-gray-900 placeholder-gray-500 ag-0 sm:text-sm focus:outline-none"
                    placeholder={props.placeholder}
                    onChange={(event) => {props.onChange(event.target.value)}}
                />
            </div>
        </div>
    )
}

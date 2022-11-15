

export default function BasicTextAreaField(props) {
    return (
        <div className='mt-6'>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Activity Notes
            </label>
            <div className="mt-1">
        <textarea
            rows={6}
            name="comment"
            id="comment"
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={props.currentValue}
            onChange={(event) => {props.onChange(event.target.value)}}
        />
            </div>
        </div>
    )
}

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const memoryOptions = [
    { name: 'Mon'},
    { name: 'Tue'},
    { name: 'Wed'},
    { name: 'Thu'},
    { name: 'Fri'},
    { name: 'Sat'},
    { name: 'Sun'}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DaySelectInput(props) {
    const [mem, setMem] = useState(memoryOptions[1])

    return (
        <div>
            <RadioGroup
                value={mem}
                onChange={(value) => {
                    setMem(value)
                    props.onChange(value.name)
                }}
                className="mt-4"

            >
                <RadioGroup.Label className="sr-only">Choose a Day</RadioGroup.Label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                    {memoryOptions.map((option) => (
                        <RadioGroup.Option
                            key={option.name}
                            value={option}
                            className={({ active, checked }) =>
                                classNames(
                                    active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                    checked
                                        ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                        : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                    'border rounded-md py-1 px-1 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                )
                            }
                        >
                            <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}

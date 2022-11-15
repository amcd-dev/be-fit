import {Fragment, useEffect, useState} from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import IconRun from "../icons/IconRun";
import IconAgility from "../icons/IconAgility";
import IconStretch from "../icons/IconStretch";
import IconWeightLifter from "../icons/IconWeightLifter";

const activityTypes = [
    {
        id: 1,
        name: 'Strength',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        icon: IconWeightLifter,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 2,
        name: 'Cardio',
        avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        icon: IconRun,
        iconBackground: 'bg-green-500',
    },
    {
        id: 3,
        name: 'Stretch',
        avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        icon: IconStretch,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 4,
        name: 'Agility',
        avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        icon: IconAgility,
        iconBackground: 'bg-purple-500',
    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ActivityTypeDropdown(props) {

    const [selected, setSelected] = useState(activityTypes.find(type => type.name === props.activityType))

    useEffect(() => {
        props.handleAddType(selected.name)
    },[selected])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block mt-5 text-sm font-medium text-gray-700">Activity Type</Listbox.Label>
                    <div className="relative mt-1 mb-4">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="flex items-center">
                                <span
                                    className={classNames(
                                        selected.iconBackground,
                                        'h-12 w-12 rounded-md flex items-center justify-center'
                                    )}
                                >
                                    <selected.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                </span>
                                <span className="ml-3 block truncate text-sm font-medium text-gray-700">{selected.name}</span>
                            </span>

                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-90 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {activityTypes.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            person.iconBackground,
                                                            'h-12 w-12 rounded-md flex items-center justify-center'
                                                        )}
                                                    >
                                                        <person.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                                    </span>
                                                    <span
                                                        className={classNames(selected ? 'font-semibold' : 'text-sm font-medium text-gray-700', 'ml-3 block truncate')}
                                                    >
                                                            {person.name}
                                                        </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

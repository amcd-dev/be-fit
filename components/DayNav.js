import { CheckIcon } from '@heroicons/react/20/solid'
import {useState} from "react";

const steps = [
    { name: 'Mon', icon: 'M', href: '#', status: 'complete' },
    { name: 'Tue', icon: 'T', href: '#', status: 'complete' },
    { name: 'Wed', icon: 'W', href: '#', status: 'current' },
    { name: 'Thu', icon: 'T', href: '#', status: 'upcoming' },
    { name: 'Fri', icon: 'F', href: '#', status: 'upcoming' },
    { name: 'Sat', icon: 'S', href: '#', status: 'upcoming' },
    { name: 'Sun', icon: 'S', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DayNav(props) {
    const [navSelectedDay, setNavSelectedDay] = useState()

    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex justify-center items-center mt-3 mb-3">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-6 sm:pr-20' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-indigo-600" />
                                </div>
                                <a
                                    href="#"
                                    className="relative flex h-8 w-8  justify-center rounded-md border-2 border-indigo-600 bg-indigo-600 hover:bg-indigo-900"
                                >
                                    <span className='px-1 pt-1 text-sm font-medium text-white'>{step.icon}</span>
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    className="relative flex h-8 w-8 justify-center rounded-md border-2 border-indigo-600 bg-white"
                                    aria-current="step"
                                >
                                    <span className='px-1 pt-1 text-sm font-medium text-gray-900'>{step.icon}</span>
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    onClick={() => {
                                        props.daySelect(step.name)
                                    }}
                                    href="#"
                                    className="group relative flex h-8 w-8 justify-center rounded-md border-2 border-gray-300 bg-white hover:border-gray-400"
                                >
                                    <span className='px-1 pt-1 text-sm font-medium text-gray-900'>{step.icon}</span>
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

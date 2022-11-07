import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Reorder } from 'framer-motion'

import IconWeightLifter from "./icons/IconWeightLifter";
import IconRun from "./icons/IconRun";
import IconAgility from "./icons/IconAgility";
import IconStretch from "./icons/IconStretch";
import ExerciseExpanded from "./ExerciseExpanded";
import {useState} from "react";
import DeleteActivity from "./DeleteActivity";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NewDayFeed(props) {
    const currentDay = props.selectedDay
    const [timeline, setTimeLine] = useState(
        [
            {
                id: 1,
                day: 'Mon',
                content: 'Cardio',
                target: 'Run',
                href: '#',
                date: '5km',
                datetime: '2020-09-20',
                icon: IconRun,
                iconBackground: 'bg-green-500',
            },
            {
                id: 2,
                day: 'Sat',
                content: 'Agility',
                target: 'Cones sprint',
                href: '#',
                date: '3 x 6m',
                datetime: '2020-09-22',
                icon: IconAgility,
                iconBackground: 'bg-purple-500',
            },
            {
                id: 3,
                day: 'Mon',
                content: 'Stretch',
                target: 'Groin Exercise',
                href: '#',
                date: '2 x 2 min',
                datetime: '2020-09-28',
                icon: IconStretch,
                iconBackground: 'bg-yellow-500',
            },
            {
                id: 4,
                day: 'Mon',
                content: 'Strength',
                target: 'Pull Ups',
                href: '#',
                date: 'BW @ 3 x 10',
                datetime: '2020-09-30',
                icon: IconWeightLifter,
                iconBackground: 'bg-blue-500',
            },
            {
                id: 5,
                day: 'Mon',
                content: 'Strength',
                target: 'Bench Press',
                href: '#',
                date: '55kg @ 4 x 12',
                datetime: '2020-10-04',
                icon: IconWeightLifter,
                iconBackground: 'bg-blue-500',
            },
            {
                id: 6,
                day: 'Mon',
                content: 'Strength',
                target: 'Seated Row',
                href: '#',
                date: '49kg @ 3 x 12',
                datetime: '2020-10-04',
                icon: IconWeightLifter,
                iconBackground: 'bg-blue-500',
            },
        ]
    )

    //Functions
    const handleRemoveActivity =(id) => {
        timeline.map((activity, index) => {
            if (activity.id === id) {
                timeline.splice(index, 1)
            }
        })
    }

    return (
        <div className="flow-root">
            <Reorder.Group values={timeline} onReorder={setTimeLine} className="my-2">
                {timeline.map((event, eventIdx) => (
                    currentDay === event.day ? //Only renders activities which match selected day
                    <Reorder.Item className="" key={event.id} value={event}>
                        <div className="relative pb-6">
                            <Disclosure>
                                <div className="relative flex space-x-3">
                                    <div>
                                        <Disclosure.Button>
                                          <span
                                              className={classNames(
                                                  event.iconBackground,
                                                  'h-12 w-12 rounded-md flex items-center justify-center'
                                              )}
                                          >
                                            <event.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                          </span>
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                {event.content}{' '}
                                                <a href={event.href} className="font-medium text-gray-900">
                                                    {event.target}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            <time dateTime={event.datetime}>{event.date}</time>
                                        </div>
                                    </div>
                                </div>
                                <Disclosure.Panel>
                                    <ExerciseExpanded />
                                </Disclosure.Panel>
                            </Disclosure>
                        </div>
                    </Reorder.Item> : null
                ))}
            </Reorder.Group>
        </div>
    )
}

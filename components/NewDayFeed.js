import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Reorder } from 'framer-motion'

import IconWeightLifter from "./icons/IconWeightLifter";
import IconRun from "./icons/IconRun";
import IconAgility from "./icons/IconAgility";
import IconStretch from "./icons/IconStretch";
import ExerciseExpanded from "./ExerciseExpanded";
import {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext";
import NoTimelineMessage from "./NoTimelineMessage";
import Loading from "./Loading";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NewDayFeed(props) {
    const { user } = useAuth()

    const currentDay = props.selectedDay

    const [isLoading, setLoading] = useState(false)
    const [timeline, setTimeLine] = useState([])
    console.log('>>> Logging timeline on page render', timeline)

    useEffect(() => { //Fetches the timeline on page load
        console.log('>>> Triggering useEffect fetch for timeline')
        async function fetchTimeLine() {
            setLoading(true)
            const response = await fetch(`http://localhost:3000/api/test?uid=sddasd4&day=${currentDay}`)
            setTimeLine(await response.json())
            await setLoading(false)
        }
        fetchTimeLine()
        console.log('>>> logging timeline after fetch',timeline)
    },[currentDay]) //re-fetches everytime user selects a new day. Could rejig this to only re-fetch on edits, deletes and adds?

    //Functions
    const handleRemoveActivity =(id) => {
        timeline.map((activity, index) => {
            if (activity.id === id) {
                timeline.splice(index, 1)
            }
        })
    }

    const iconRender = (activityType) => { //renders different fields depending on the activity type
        if (activityType === 'Strength') {
            return (
                <span
                    className={classNames(
                        'bg-blue-500',
                        'h-12 w-12 rounded-md flex items-center justify-center'
                    )}
                >
                    <IconWeightLifter className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
            )
        } else if (activityType === 'Cardio') {
            return (
                <span
                    className={classNames(
                        'bg-green-500',
                        'h-12 w-12 rounded-md flex items-center justify-center'
                    )}
                >
                    <IconRun className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
            )
        } else if (activityType === 'Stretch') {
            return (
                <span
                    className={classNames(
                        'bg-yellow-500',
                        'h-12 w-12 rounded-md flex items-center justify-center'
                    )}
                >
                    <IconStretch className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
            )
        } else if (activityType === 'Agility') {
            return (
                <span
                    className={classNames(
                        'bg-purple-500',
                        'h-12 w-12 rounded-md flex items-center justify-center'
                    )}
                >
                    <IconAgility className="h-8 w-8 text-white" aria-hidden="true" />
                </span>
            )
        }
    }

    const typeRender = (activityType, event) => {
        if (activityType === 'Strength') {
            return (
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                    {event.weight_kg}kg @ {event.sets} x {event.reps}
                </div>
            )
        } else if (activityType === 'Cardio') {
            return (
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                    {event.weight_kg}kg @ {event.sets} x {event.reps}
                </div>
            )
        } else if (activityType === 'Stretch') {
            return (
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                    {event.weight_kg}kg @ {event.sets} x {event.reps}
                </div>
            )
        } else if (activityType === 'Agility') {
            return (
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                    {event.weight_kg}kg @ {event.sets} x {event.reps}
                </div>
            )
        }
    }

    if (isLoading) return (
        <Loading />
    )
    if (timeline.length === 0) return <NoTimelineMessage />

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
                                            {iconRender(event.type)}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                [{event.type}]{' '}
                                                <a href={event.href} className="font-medium text-gray-900">
                                                    {event.activity}
                                                </a>
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            {typeRender(event.type, event)}
                                        </div>
                                    </div>
                                </div>
                                <Disclosure.Panel>
                                    <ExerciseExpanded />
                                </Disclosure.Panel>
                            </Disclosure>
                        </div>
                    </Reorder.Item> : null //don't render the activity if it doesn't match selected day
                ))}
            </Reorder.Group>
        </div>
    )
}

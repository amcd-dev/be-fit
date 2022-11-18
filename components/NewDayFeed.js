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
import AddActivity from "./AddActivity";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NewDayFeed(props) {
    const { user } = useAuth()

    const currentDay = props.selectedDay
    // console.log('>>> Logging current day variable from NewDayFeed', currentDay)

    const [isLoading, setLoading] = useState(false)
    const [timeline, setTimeLine] = useState([])
    const [addActivityOpen, setAddActivityOpen] = useState(false)

    // console.log('>>> Logging timeline on page render', timeline)

    useEffect(() => { //Fetches the timeline on page load
        fetchTimeLine()
    },[currentDay, addActivityOpen]) //re-fetches everytime user selects a new day. Could rejig this to only re-fetch on edits, deletes and adds?

    //Functions
    async function fetchTimeLine() {
        const reqOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        setLoading(true)
        const response = await fetch(`http://localhost:3000/api/test?uid=${user.uid}&day=${currentDay}`, reqOptions)
        setTimeLine(await response.json())
        await setLoading(false)
    }


    const iconRender = (activityType) => { //renders different fields depending on the activity type
        //TODO simplify / clean up into individual component
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

    const typeRender = (activityType, event) => { //renders different activity attributes depending on type
        //TODO simplify / clean up into individual component
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
                    {event.sets} x {event.distance_km}km or {event.duration_min} min(s)
                </div>
            )
        } else if (activityType === 'Stretch') {
            return (
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                    {event.sets} x {event.duration_min}min(s)
                </div>
            )
        } else if (activityType === 'Agility') {
            return (
                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                    {event.sets} x {event.distance_m}m
                </div>
            )
        }
    }

    if (isLoading) return (
        <Loading />
    )
    if (timeline.length === 0) return (
        //TODO simplify / clean up into individual component
        <div>
            <NoTimelineMessage />
            <div className="flex-shrink-0">
                <button
                    onClick={() => {setAddActivityOpen(true)}}
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M8.603 9.61a2.04 2.04 0 012.912 0L12 10l.5-.396a2.035 2.035 0 012.897.007 2.104 2.104 0 010 2.949L12 16l-3.397-3.44a2.104 2.104 0 010-2.95z" />
                    </svg>
                    <span className="ml-2">Add Activity</span>
                </button>
            </div>
            <AddActivity
                modalOpen ={addActivityOpen}
                closeModal={() => setAddActivityOpen(false)}
                currentDay={currentDay}
            />
        </div>

    )

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

                                                <a href={event.href} className="font-medium text-gray-900">
                                                    {event.activity}
                                                </a>
                                                {' '}[{event.type}]
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            {typeRender(event.type, event)}
                                        </div>
                                    </div>
                                </div>
                                <Disclosure.Panel>
                                    <ExerciseExpanded
                                        exerciseObject={event}
                                        refreshFeed={() => {
                                            fetchTimeLine() //TODO add pop up confirmation
                                        }}
                                    />
                                </Disclosure.Panel>
                            </Disclosure>
                        </div>
                    </Reorder.Item> : null //don't render the activity if it doesn't match selected day
                ))}
            </Reorder.Group>
            <div className="flex-shrink-0">
                <button
                    onClick={() => {setAddActivityOpen(true)}}
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M8.603 9.61a2.04 2.04 0 012.912 0L12 10l.5-.396a2.035 2.035 0 012.897.007 2.104 2.104 0 010 2.949L12 16l-3.397-3.44a2.104 2.104 0 010-2.95z" />
                    </svg>
                    <span className="ml-2">Add Activity</span>
                </button>
            </div>
            <AddActivity
                currentDay={currentDay}
                modalOpen ={addActivityOpen}
                closeModal={() => setAddActivityOpen(false)}
            />
        </div>
    )
}

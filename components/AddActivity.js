import {Fragment, useEffect, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import ActivityTypeDropdown from "./form-components/ActivityTypeDropdown";
import BasicInputField from "./form-components/BasicInputField";
import BasicTextAreaField from "./form-components/BasicTextAreaField";
import DaySelectInput from "./form-components/DaySelectInput";
import {useAuth} from "../context/AuthContext";
import MultipleDaySelectInput from "./form-components/MultipleDaySelectInput";
import {apiPath} from "./NewDayFeed";

export default function AddActivity(props) {
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const [activityAdd, setActivityAdd] = useState({
        day: '',
        name: 'Unnamed activity',
        type: 'Strength',
        sets: 0,
        reps: 0,
        weight_kg: 0,
        weight_lb: 0,
        distance_km: 0,
        distance_mi: 0,
        distance_m: 0,
        distance_yd: 0,
        incline: 0,
        duration_min: 0,
        notes: ''
    })

    useEffect(() => {
        if (props.modalOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    })

    //Functions
    const handleSave = async (activityObject) => {
        event.preventDefault()
        const reqOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                day: activityObject.day,
                type: activityObject.type,
                activityName: activityObject.name,
                sets: activityObject.sets,
                reps: activityObject.reps,
                weight_kg: activityObject.weight_kg,
                weight_lb: activityObject.weight_lb,
                distance_km: activityObject.distance_km,
                distance_mi: activityObject.distance_mi,
                distance_m: activityObject.distance_m,
                distance_yd: activityObject.distance_yd,
                incline: activityObject.incline,
                duration_min: activityObject.duration_min,
                notes: activityObject.notes,
            })
        }
        const response = await fetch(`${apiPath()}/api/add_activity?uid=${user.uid}`, reqOptions)
        await props.closeModal()

    }

    const handleAddDays = (dayArray) => {
        // console.log('>>> handleAddDays initiated with: ', dayArray)
        setActivityAdd({
            ...activityAdd,
            day: dayArray
        })
    }

    const formTypeRender = (activityType) => {
        if (activityType === 'Strength') {
            return (
                <div>
                    <BasicInputField
                        label='Activity Name'
                        inputType='Text'
                        name='name'
                        id='name'
                        placeholder='e.g. Bench-press or Bar Squat'
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                name: value
                            })
                        }}
                    />
                    <div className='flex'>
                        <BasicInputField
                            label='sets'
                            inputType='number'
                            name='sets'
                            id='sets'
                            placeholder='3'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    sets: value
                                })
                            }}
                        />
                        <BasicInputField
                            label='reps'
                            inputType='number'
                            name='reps'
                            id='reps'
                            placeholder='12'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    reps: value
                                })
                            }}
                        />
                        <BasicInputField
                            label='kg'
                            inputType='number'
                            name='kg'
                            id='kg'
                            placeholder='55'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    weight_kg: value
                                })
                            }}
                        />
                    </div>
                    <BasicTextAreaField
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                notes: value
                            })
                        }}
                    />
                </div>
            )

        } else if (activityType === 'Cardio') {
            return (
                <div>
                    <BasicInputField
                        label='Activity Name'
                        inputType='Text'
                        name='name'
                        id='name'
                        placeholder='e.g. Run or Swim'
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                name: value
                            })
                        }}
                    />
                    <div className='flex'>
                        <BasicInputField
                            label='sets'
                            inputType='number'
                            name='sets'
                            id='sets'
                            placeholder='1'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    sets: value
                                })
                            }}
                        />
                        <BasicInputField
                            label='distance'
                            inputType='number'
                            name='distance'
                            id='distance'
                            placeholder='10'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    distance_km: value
                                })
                            }}
                        />
                        <BasicInputField
                            label='duration'
                            inputType='number'
                            name='duration'
                            id='duration'
                            placeholder='25'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    duration_min: value
                                })
                            }}
                        />
                    </div>
                    <BasicTextAreaField
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                notes: value
                            })
                        }}
                    />
                </div>
            )

        } else if (activityType === 'Stretch') {
            return (
                <div>
                    <BasicInputField
                        label='Activity Name'
                        inputType='Text'
                        name='name'
                        id='name'
                        placeholder='e.g. Hamstring or Groin'
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                name: value
                            })
                        }}
                    />
                    <div className='flex'>
                        <BasicInputField
                            label='sets'
                            inputType='number'
                            name='sets'
                            id='sets'
                            placeholder='3'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    sets: value
                                })
                            }}
                        />
                        <BasicInputField
                            label='duration'
                            inputType='number'
                            name='duration'
                            id='duration'
                            placeholder='2'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    duration_min: value
                                })
                            }}
                        />
                    </div>
                    <BasicTextAreaField
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                notes: value
                            })
                        }}
                    />
                </div>
            )

        } else if (activityType === 'Agility') {
            return (
                <div>
                    <BasicInputField
                        label='Activity Name'
                        inputType='Text'
                        name='name'
                        id='name'
                        placeholder='e.g. Beep Test or Box Jump'
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                name: value
                            })
                        }}
                    />
                    <div className='flex'>
                        <BasicInputField
                            label='sets'
                            inputType='number'
                            name='sets'
                            id='sets'
                            placeholder='3'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    sets: value
                                })
                            }}
                        />
                        <BasicInputField
                            label='distance'
                            inputType='number'
                            name='distance'
                            id='distance'
                            placeholder='12'
                            onChange={(value) => {
                                setActivityAdd({
                                    ...activityAdd,
                                    distance_m: value
                                })
                            }}
                        />
                    </div>
                    <BasicTextAreaField
                        onChange={(value) => {
                            setActivityAdd({
                                ...activityAdd,
                                notes: value
                            })
                        }}
                    />
                </div>
            )

        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div>
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                        <PlusIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Add New Activity
                                        </Dialog.Title>
                                        {/*Form content below*/}
                                        {/*<DaySelectInput*/}
                                        {/*    currentDay={props.currentDay}*/}
                                        {/*    onChange={(value) => {*/}
                                        {/*        setActivityAdd({*/}
                                        {/*            ...activityAdd,*/}
                                        {/*            day: value*/}
                                        {/*        })}*/}
                                        {/*    }*/}
                                        {/*/>*/}
                                        <MultipleDaySelectInput
                                            currentDay={props.currentDay}
                                            addDays={(selectedDays) => handleAddDays(selectedDays)}
                                        />
                                        <ActivityTypeDropdown
                                            activityType={activityAdd.type}
                                            handleAddType={(activityType) => {
                                                setActivityAdd({
                                                    ...activityAdd,
                                                    type: activityType
                                                })
                                            }}
                                        />
                                        {/* Depending on activity type renders a different form for the user */}
                                        {formTypeRender(activityAdd.type)}
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                        // onClick={() => setOpen(false)}
                                        onClick={() => {handleSave(activityAdd)}}>
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                        // onClick={() => setOpen(false)}
                                        onClick={() => props.closeModal()}

                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

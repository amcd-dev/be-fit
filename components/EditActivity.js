import {Fragment, useEffect, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PencilIcon } from '@heroicons/react/24/outline'
import ActivityTypeDropdown from "./form-components/ActivityTypeDropdown";
import BasicInputField from "./form-components/BasicInputField";
import BasicTextAreaField from "./form-components/BasicTextAreaField";
import {useAuth} from "../context/AuthContext";

export default function EditActivity(props) {
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const [strengthEdit, setStrengthEdit] = useState({
        day: 'Mon',
        name: '',
        type: 'Strength',
        sets: 0,
        reps: 0,
        kg: 0,
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
    const handleEditActivity = async (editedActivityObject) => {
        event.preventDefault()

        const reqOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //Below ternary conditions make sure undefined is not being passed through which breaks the postgres update
                type: editedActivityObject.type ? editedActivityObject.type : props.selectedActivity.type,
                activityName: editedActivityObject.name ? editedActivityObject.name : props.selectedActivity.activity,
                sets: editedActivityObject.sets ? editedActivityObject.sets : props.selectedActivity.sets,
                reps: editedActivityObject.reps ? editedActivityObject.reps : props.selectedActivity.reps,
                weight_kg: editedActivityObject.kg ? editedActivityObject.kg : props.selectedActivity.weight_kg,
                notes: editedActivityObject.notes ? editedActivityObject.notes : props.selectedActivity.notes,
            })
        }

        const response = await fetch(`http://localhost:3000/api/edit_activity?uid=${user.uid}&id=${props.selectedActivity.id}`, reqOptions)
        console.log('The new settings that have been saved are:', editedActivityObject, ' Performing DB update')
        await props.refreshFeed()
        await props.closeModal()
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
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                                        <PencilIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                            Edit Activity
                                        </Dialog.Title>
                                        {/*Form content below*/}
                                        {/* Ternary statement to check what type of exercise for what type of form */}
                                        {/*//TODO find way to stop dropdown being default selected, so if nothing is changed, no api call is made*/}
                                        <ActivityTypeDropdown
                                            activityType={props.selectedActivity.type}
                                            handleAddType={(activityType) => {
                                                setStrengthEdit({
                                                    ...setStrengthEdit,
                                                    type: activityType
                                                })
                                            }}

                                        />
                                        <BasicInputField
                                            label='Activity Name'
                                            inputType='Text'
                                            name='name'
                                            id='name'
                                            placeholder={props.selectedActivity.activity}
                                            onChange={(value) => {
                                                setStrengthEdit({
                                                    ...strengthEdit,
                                                    name: value
                                                })}
                                            }
                                        />
                                        <div className='flex'>
                                            <BasicInputField
                                                label='sets'
                                                inputType='number'
                                                name='sets'
                                                id='sets'
                                                placeholder={props.selectedActivity.sets}
                                                onChange={(value) => {
                                                    setStrengthEdit({
                                                        ...strengthEdit,
                                                        sets: value
                                                    })}
                                            }
                                            />
                                            <BasicInputField
                                                label='reps'
                                                inputType='number'
                                                name='reps'
                                                id='reps'
                                                placeholder={props.selectedActivity.reps}
                                                onChange={(value) => {
                                                    setStrengthEdit({
                                                        ...strengthEdit,
                                                        reps: value
                                                    })}
                                                }
                                            />
                                            <BasicInputField
                                                label='kg'
                                                inputType='number'
                                                name='kg'
                                                id='kg'
                                                placeholder={props.selectedActivity.weight_kg}
                                                onChange={(value) => {
                                                    setStrengthEdit({
                                                        ...strengthEdit,
                                                        kg: value
                                                    })}
                                                }
                                            />
                                        </div>
                                        <BasicTextAreaField
                                            currentValue={props.selectedActivity.notes}
                                            onChange={(value) => {
                                                setStrengthEdit({
                                                    ...strengthEdit,
                                                    notes: value
                                                })}
                                            }
                                        />
                                        {/*Form content above*/}

                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                        // onClick={() => setOpen(false)}
                                        onClick={() => {
                                            handleEditActivity(strengthEdit)
                                        }}
                                    >
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

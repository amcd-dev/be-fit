import {useState} from "react";
import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import DeleteActivity from "./DeleteActivity";
import EditActivity from "./EditActivity";
import {useAuth} from "../context/AuthContext";


export default function ExerciseExpanded(props) {
    const { user } = useAuth()
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [editModalOpen, setEditModalOpen] = useState(false)
    console.log('>>> Exercise Object: ', props.exerciseObject)

    const handleDeleteActivity = async (activityId) => {
        event.preventDefault()
        const reqOptions = {
            method: 'DELETE'
        }
        const response = await fetch(`http://localhost:3000/api/delete_activity?uid=${user.uid}&id=${activityId}`)
        await props.refreshFeed()
    }

    //functions
    const typeRender = (exerciseObject) => { //TODO simplify / clean up into individual component
        console.log('>>> Logging exercise object in typeRender function: ', exerciseObject)
        if (exerciseObject === 'Strength') {
            return (
                <li className="flex justify-around px-4 py-4 sm:px-6">
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        Sets:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.sets}</span>
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        Reps:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.reps}</span>
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        kg:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.weight_kg}</span>
                </li>
            )
        } else if (exerciseObject === 'Cardio') {
            return (
                <li className="flex justify-around px-4 py-4 sm:px-6">
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        Sets:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.sets}</span>
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        km:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.distance_km}</span>
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        min(s):
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.duration_min}</span>
                </li>
            )
        } else if (exerciseObject === 'Stretch') {
            return (
                <li className="flex justify-around px-4 py-4 sm:px-6">
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        Sets:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.sets}</span>
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        min(s):
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.duration_min}</span>
                </li>
            )
        } else if (exerciseObject === 'Agility') {
            return (
                <li className="flex justify-around px-4 py-4 sm:px-6">
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        Sets:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.sets}</span>
                    <span className="inline-flex items-center rounded bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800">
                        m:
                    </span>
                    <span className='inline-flex items-center rounded px-2 py-0.5 text-sm font-medium text-gray-800'>{props.exerciseObject.distance_m}</span>
                </li>
            )
        }
    }

    return (
        <div className="overflow-hidden bg-white mt-4 shadow sm:rounded-md">

            {/*{deleteModalOpen ? <DeleteActivity closeModal={() => setDeleteModalOpen(false)} /> : null}*/}
            <DeleteActivity
                modalOpen={deleteModalOpen}
                closeModal={() => setDeleteModalOpen(false)}
                delete={() => handleDeleteActivity(props.exerciseObject.id)}
            />
            <EditActivity
                modalOpen ={editModalOpen}
                closeModal={() => setEditModalOpen(false)}
                selectedActivity={props.exerciseObject}
                refreshFeed={() => props.refreshFeed()}
            />

            <ul role="list" className="divide-y divide-gray-100">
                {/*TODO add css for props*/}
                {typeRender(props.exerciseObject.type)}
                <li className="flex justify-start px-4 py-4 sm:px-6">
                    <span className="inline-flex items-center rounded bg-yellow-100 px-2 py-0.5 text-sm font-medium text-yellow-800">
                        Notes:
                    </span>
                    <span> {props.exerciseObject.notes}</span>
                </li>
                <li className="px-4  sm:px-6">
                    <div className="relative">
                        <div className="relative flex justify-center">
                            <span className="isolate inline-flex -space-x-px rounded-md ">
                              <button
                                  onClick={() => setEditModalOpen(true)}
                                  type="button"
                                  className="relative inline-flex items-center rounded-l-md bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 active:bg-indigo-100"
                              >
                                <span className="sr-only">Edit</span>
                                <PencilIcon className="h-5 w-5" aria-hidden="true" />
                              </button>


                              <button
                                  onClick={() => setDeleteModalOpen(true)}
                                  type="button"
                                  className="relative inline-flex items-center rounded-r-md bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 active:bg-indigo-100"
                              >
                                <span className="sr-only">Delete</span>
                                <TrashIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

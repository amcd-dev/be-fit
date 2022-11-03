import { PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'

import DeleteActivity from "./DeleteActivity";
import {useState} from "react";
import IconMoon from "./icons/IconMoon";

export default function ExerciseExpanded() {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)

    return (
        <div className="overflow-hidden bg-white mt-4 shadow sm:rounded-md">

            {/*{deleteModalOpen ? <DeleteActivity closeModal={() => setDeleteModalOpen(false)} /> : null}*/}
            <DeleteActivity modalOpen={deleteModalOpen} closeModal={() => setDeleteModalOpen(false)} />

            <ul role="list" className="divide-y divide-gray-100">
                <li className="px-4 py-4 sm:px-6">
                    {/* Your content */}
                </li>
                <li className="px-4 py-4 sm:px-6">
                    {/* Your content */}
                </li>
                <li className="px-4  sm:px-6">
                    <div className="relative">
                        <div className="relative flex justify-center">
                            <span className="isolate inline-flex -space-x-px rounded-md ">
                              <button
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

import {useEffect, useState} from "react";


export default function MultipleDaySelectInput(props) {

    const [selectedDays, setSelectedDays] = useState([])


    useEffect(() => {
        setSelectedDays([props.currentDay])
    }, [])

    useEffect(() => { //If selected days state is updated, pass the new array up to the add activity component
        props.addDays(selectedDays)
    }, [selectedDays])

    //Functions
    const handleSelect = (value) => {
        /* This function updates the selectedDays array, checking whether the day is already selected (checked)
        * and if it isn't: adds it to the array, if it is: removes it from the array
        *
        * The idea being it will send this array back to the addActivity component, which will loop over the array
        * and create the same activity for multiple days (if selected)
        *
        * TODO It works as intended, but it seems clunky and there must be a nicer way to manage this
        * */
        const dayAlreadySelected = selectedDays.find(day => day === value)
        if (dayAlreadySelected === undefined) {
            //If the day isn't selected, add it to the array
            setSelectedDays(previousValues => [...previousValues, value])
        } else {
            //If the day is already selected, find it and remove it from the array
            const index = selectedDays.indexOf(value)
            if (index > -1 ) {
                selectedDays.splice(index, 1)
                setSelectedDays(selectedDays)
            }
        }
    }
    const handleDefaultChecked = (currentDay, value) => {
        //Pre-selects the day the user has currently selected in the feed
        //If it is true, it will return set it as checked, if it is false it won't
        return currentDay === value;
    }

    return (
        <fieldset className="flex justify-between space-y-5">
            <legend className="sr-only">Day select</legend>
            <div className="relative flex flex-col items-center">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Mon
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Mon')}
                        value="Mon"
                        id="Mon"
                        aria-describedby="Monday"
                        name="Mon"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
            <div className="relative flex flex-col items-center">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Tue
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Tue')}
                        value="Tue"
                        id="Tue"
                        aria-describedby="Tuesday"
                        name="Tue"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
            <div className="relative flex flex-col items-center ">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Wed
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Wed')}
                        value="Wed"
                        id="Wed"
                        aria-describedby="Wednesday"
                        name="Wed"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
            <div className="relative flex flex-col items-center ">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Thu
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Thu')}
                        value="Thu"
                        id="Thu"
                        aria-describedby="Thursday"
                        name="Thu"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
            <div className="relative flex flex-col items-center ">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Fri
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Fri')}
                        value="Fri"
                        id="Fri"
                        aria-describedby="Friday"
                        name="Fri"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
            <div className="relative flex flex-col items-center ">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Sat
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Sat')}
                        value="Sat"
                        id="Sat"
                        aria-describedby="Saturday"
                        name="Sat"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
            <div className="relative flex flex-col items-center ">
                <div className="text-sm">
                    <label htmlFor="comments" className="font-medium text-gray-700">
                        Sun
                    </label>
                </div>
                <div className="flex h-5 items-center">
                    <input
                        defaultChecked={handleDefaultChecked(props.currentDay, 'Sun')}
                        value="Sun"
                        id="Sun"
                        aria-describedby="Sunday"
                        name="Sun"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={(event) => handleSelect(event.target.value)}
                    />
                </div>
            </div>
        </fieldset>
    )
}

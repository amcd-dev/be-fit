import {useAuth} from "../../context/AuthContext";
import {useState} from "react";

//Component Imports
import DayNav from "../../components/DayNav";
import NewDayFeed from "../../components/NewDayFeed";

//Icon Imports
import IconSunRise from "../../components/icons/IconSunRise";
import IconMoon from "../../components/icons/IconMoon";

export default function Home() {
    const { user } = useAuth()

    const [currentDay, setCurrentDay] = useState('Mon') //TODO set day dynamically based on the actual day

    // console.log(new Date().toLocaleString('default', {weekday: 'short'}))

    return (
        <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8">{/* Page Container */}
            <DayNav
                daySelect={(day) => setCurrentDay(day)}
            />
            <IconSunRise className="mx-auto mt-2 h-12 w-12 " />
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">{/* */}
                <div className="px-4 py-5 sm:p-6">
                    <NewDayFeed
                        selectedDay={currentDay}
                    />
                </div>
            </div>
            <IconMoon className="h-8 w-8 mt-3 mx-auto" />
        </div>

    )
}
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../components/FirebaseConfig';



export const Context = createContext()

const AppContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [workTime, setWorkTime] = useState(25 * 60);
    const [breakTime, setbreakTime] = useState(5 * 60);


    const [initTime, setInitTime] = useState(0)

    const [activeTag, setActiveTag] = useState(0);
    const [progress, setProgress] = useState(100);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser('')
            }
        })
        return unsubcribe
    }, [])

    useEffect(() => {
        switch (activeTag) {
            case 0:
                setTime(workTime)
                setInitTime(workTime)
                setProgress(100)
                break;
            case 1:
                setTime(breakTime)
                setInitTime(breakTime)
                setProgress(100)
                break;
            default:
                break;
        }

    }, [activeTag, workTime, breakTime])

    useEffect(() => {
        if (initTime === workTime && time === 0) {
            setActiveTag(1)
        }

    }, [initTime, workTime, time])




    return <Context.Provider value={{
        activeTag, setActiveTag, progress, setProgress, time, setTime, isActive, setIsActive, initTime,currentUser
    }}>{children} </Context.Provider>
}

export default AppContext

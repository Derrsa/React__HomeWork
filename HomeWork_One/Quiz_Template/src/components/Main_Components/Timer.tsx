import {useState} from "react";
import {useTimer} from "../hooks/useTimer.tsx";
import {useNavigate} from "react-router-dom";

export function Timer ({timeInterval,setIsEnd}) {
    const nav = useNavigate()
    const [time, setTime] = useState<{second:number;minute:number}>({
        second: 0,
        minute: parseInt(timeInterval,10)
    })
    const [enabled,setEnabled] = useState<boolean>(false)

    useTimer(()=>{
        setTime(prev => {
            if(prev.second < 1 && prev.minute >0){
                prev.second = 60
                prev.minute -= 1
            }
            if(prev.second === 1 && prev.minute === 0){
                setEnabled(true)
                setIsEnd()
                nav("/result")
            }

            return {...prev,second: prev.second -1}
        })

    },enabled)

    return (
        <div>
            <h2>Timer: <span>{`0${time.minute}`}</span> : <span>{`${time.second < 10 ? `0${time.second}` : `${time.second}` }`}</span></h2>
        </div>
    )
}




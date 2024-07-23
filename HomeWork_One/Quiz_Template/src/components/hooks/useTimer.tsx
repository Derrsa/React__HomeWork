import {useEffect, useRef} from "react";

export function useTimer(callback,enabled) {
    const savedCallback = useRef<FC | null>(null)

    useEffect(()=>{
        savedCallback.current = callback
    })

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if(!enabled){
            const id = setInterval(tick,1000)
            return ()=> clearInterval(id)
        }


    }, [enabled]);


}
import {createContext, useState} from "react";

export const SettingsContext = createContext({
})

export const SettingsProvider = ({children}) => {
    const [category,setCategory] = useState(['Animal', 'Cars'])
    const [time,setTime] = useState(['1m','2m','5m'])

    return(
        <SettingsContext.Provider value = {{category,time}} >
            {children}
        </SettingsContext.Provider>
    )
}
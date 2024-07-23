import {createContext} from "react";
import {difficultyOptions,typeOptions,timeOptions,categoryOptions,statisticOption,configurationOption} from "../mockData/data.ts";

export const SettingsContext = createContext({
})

export const SettingsProvider = ({children}) => {
    return(
        <SettingsContext.Provider value = {{difficultyOptions,typeOptions,timeOptions,categoryOptions,statisticOption,configurationOption}} >
            {children}
        </SettingsContext.Provider>
    )
}
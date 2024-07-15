import {createContext, useState} from "react";
import {difficultyOptions,typeOptions,timeOptions,categoryOptions} from "../mockData/data.ts";

export const SettingsContext = createContext({
})

export const SettingsProvider = ({children}) => {


    return(
        <SettingsContext.Provider value = {{difficultyOptions,typeOptions,timeOptions,categoryOptions}} >
            {children}
        </SettingsContext.Provider>
    )
}
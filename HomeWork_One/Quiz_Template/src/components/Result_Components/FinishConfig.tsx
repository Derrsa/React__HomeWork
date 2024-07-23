import style from "./FinishConfig.module.css"
import {useContext} from "react";
import {SettingsContext} from "../Context.tsx";

export function FinishConfig() {
    const {configurationOption} = useContext(SettingsContext)
    return(
        <div>
            <h3>Your initial configuration:</h3>
            <div className={style.config__content}>
                <span>Category: {configurationOption.category}</span>
                <span>Difficult: {configurationOption.difficult}</span>
                <span>Type: {configurationOption.type}</span>
                <span>Time: {configurationOption.time}</span>
            </div>
        </div>
    )
}
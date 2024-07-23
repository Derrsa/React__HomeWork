import style from "./Statistic.module.css"

import {useContext} from "react";
import {SettingsContext} from "../Context.tsx";

export function Statistic() {
    const {statisticOption} = useContext(SettingsContext)
    return(
        <div className={style.statistic__wrapper}>
            <ul>
                Your statistic:
                <li>-Correct answer: {statisticOption.correct} out of {statisticOption.common}</li>
                <li>-It took you {statisticOption.time} </li>
            </ul>
        </div>
    )
}
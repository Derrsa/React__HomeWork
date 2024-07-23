import style from  './ResultScreen.module.css'
import {Button} from "../buttons/Button.tsx";
import {Statistic} from "./Statistic.tsx";
import {FinishConfig} from "./FinishConfig.tsx";


export function ResultScreen() {
    return(
        <div className={style.result__wrapper}>
            <h2>Thank you for completed our Quiz! Here your results: </h2>
            <Statistic/>
            <FinishConfig/>
            <div>
                <Button route={'/main/1Q'} title='Restart'/>
                <Button route={'/'} title='Choose another quiz'/>
            </div>
        </div>
    )
}
import './Select.css'
import {SettingsContext} from "../Context.tsx";
import {useContext} from "react";
import { v4 as uuidv4 } from 'uuid'

function SelectTime() {
    const {timeOptions} = useContext(SettingsContext)
    console.log(timeOptions)
    return(
        <>
            <div className='input-container'>
                <label htmlFor="select" className="select-label">Time</label>
                <select name="select-setting" className="select">
                    {
                        timeOptions ? timeOptions.map((el)=>{
                            return (
                                <option key={el.id}>{el.value}</option>
                            )
                        }) : <option value="">template</option>
                    }
                </select>
            </div>

        </>
    )
}

export default SelectTime
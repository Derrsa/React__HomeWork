import './Select.css'
import {SettingsContext} from "../Context.tsx";
import {useContext} from "react";

function SelectTime({category}) {
    const {time} = useContext(SettingsContext)
    return(
        <>
            <div className='input-container'>
                <label htmlFor="select" className="select-label">{category}</label>
                <select name="select-setting" className="select">
                    {
                        time? time.map((el,index)=>{
                            return (
                                <option key={index}>{el}</option>
                            )
                        }) : <option value="">template</option>
                    }
                </select>
            </div>

        </>
    )
}

export default SelectTime
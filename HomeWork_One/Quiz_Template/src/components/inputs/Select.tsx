import './Select.css'
import { v4 as uuidv4 } from 'uuid'

function Select({category,options}) {
    console.log(options)
    return(
        <>
            <div className='input-container'>
                <label htmlFor="select" className="select-label">{category}</label>
                <select name="select-setting" className="select">
                    {
                        options? options.map((el)=>{
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

export default Select
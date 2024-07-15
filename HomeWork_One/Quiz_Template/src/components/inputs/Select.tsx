import './Select.css'
function Select({category,options}) {
    return(
        <>
            <div className='input-container'>
                <label htmlFor="select" className="select-label">{category}</label>
                <select name="select-setting" className="select">
                    {
                        options? options.map((el,index)=>{
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

export default Select
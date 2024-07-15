import './Input.css'
function Input() {
    return(
        <>
            <div className='input-container'>
                <label htmlFor="styled-input"  className="input-label">Number of questions</label>
                <input type='number'  max='15' min='5' id="styled-input" placeholder="Enter number from 5 to 15" required/>
                <span className="input-underline"></span>
            </div>
        </>
    )
}

export default Input
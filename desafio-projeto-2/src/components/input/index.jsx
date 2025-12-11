import "./styles.css"

function Input({value, onChange}) {

    return (
        <div className="input">
            <input value={value} onChange={onChange}/> 
        </div>
    )
}

export default Input
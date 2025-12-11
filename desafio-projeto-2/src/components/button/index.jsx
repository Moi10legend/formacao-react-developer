import "./styles.css"

function Button({onClick}){

    return(
        <div className="button" onClick={onClick}>
            Buscar
        </div>
    )
}

export default Button
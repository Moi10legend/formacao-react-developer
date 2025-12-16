

function Input(props){

    return(
        <div className="flex flex-row w-64 items-center gap-2 mb-4 border-b-2 border-[#3b3450]">
            <img src={props.logo} alt={props.name_img} className="size-4"/> 
            <input type="text" placeholder={props.placeholder} 
            className="bg-transparent focus:outline-none w-full"/>
        </div>
    )
}

export default Input
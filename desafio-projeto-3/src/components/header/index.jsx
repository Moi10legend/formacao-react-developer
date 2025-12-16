import dio_logo_1 from "../../assets/logo-dio-1.svg"

function Header(){

    return(
        <header className="w-full h-12 flex bg-black">
            <div className="flex-1 flex justify-items-start items-center ml-16">
                <img src={dio_logo_1} alt="Logo DIO" className="w-16 h-8 "/>
            </div>
            <div className="flex gap-4 items-center mr-16">
                <p>Home</p>
                <button className="
                bg-gray-button 
                px-8 
                rounded-2xl 
                text-base
                hover:bg-gray-400
                hover:cursor-pointer">
                    Entrar
                </button>
                <button className="
                bg-gray-button 
                px-8 
                rounded-2xl 
                text-base
                hover:bg-gray-400
                hover:cursor-pointer">
                    Cadastrar
                </button>
            </div>
        </header>
    )
}

export default Header
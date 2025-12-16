import Header from "./components/header"
import Input from "./components/input"
import email_logo from "./assets/email.svg"
import vector from "./assets/Vector.svg"
import password_logo from "./assets/password.svg"

//import './App.css'

function App() {

  return (
    <div className="w-full h-screen bg-[#1e192c]">
      <Header />
      <div className="w-full grid grid-cols-2">
        <section className="flex justify-center">
          <p className="text-3xl mt-16">A plataforma para você <br />
            aprender com experts,<br />
            dominar as principais<br /> 
            tecnologias e entrar<br />
            mais rápido nas<br /> 
            empresas mais<br />
            desejadas.</p>
        </section>
        <section className="flex justify-center h-140 ml-16 flex-col">
          <h1 className="text-2xl font-bold mb-2">Comece agora grátis</h1>
          <h2 className="mb-6">Crie sua conta agora e make the change._</h2>
          <form action="" className="gap-4">
            <Input logo={vector} name_img="vector logo" placeholder="Nome completo"></Input>
            <Input logo={email_logo} name_img="email logo" placeholder="E-mail"></Input>
            <Input logo={password_logo} name_img="Senha pin" placeholder="Password"></Input>
            <div className="
            flex 
            justify-center 
            w-64 
            mt-12
            py-1 
            px-1 
            bg-transparent 
            border 
            border-[#e4105d] 
            rounded-3xl">
              <button type="submit" className=" 
              w-60 
              py-1 
              bg-[#e4105d] 
              rounded-3xl 
              hover:cursor-pointer
              hover:bg-[#9c1949] ">
                Criar minha conta
              </button>
            </div>
          </form>
          <p className="mt-8">
            Ao clicar em "criar minha conta grátis",<br /> 
            declaro que aceito as Políticas de<br /> 
            Privacidade e os Termos de Uso da DIO.
          </p>
          <div className="flex ">
            <p><strong>Já tenho conta.</strong></p>
            <a href="#" className="text-green-400 ml-1 hover:text-green-800">Fazer login</a>
          </div>
          
        </section>
      </div>
      

    </div>
  )
}

export default App

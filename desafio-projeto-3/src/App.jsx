import Header from "./components/header"
//import './App.css'

function App() {

  return (
    <div className="w-full h-screen bg-[#1e192c]">
      <Header />
      <button className="bg-brand hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Botão Tailwind
      </button>
    </div>
  )
}

export default App

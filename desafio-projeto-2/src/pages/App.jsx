import { useState } from 'react'
import './App.css'
import github_logo from "../assets/GitHub-Logo.png"
import Input from "../components/input"
import ItemRepo from '../components/itemrepo'
import Button from '../components/button'

function App() {

  const [currentRepo, setCurrenteRepo] = useState("")
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const repoData = await fetch(`https://api.github.com/repos/${currentRepo}`)
    const newRepo = await repoData.json()
    
    if (newRepo.id){
      const isExist = repos.find(repo => repo.id == newRepo.id)

      if(!isExist){
        setRepos(prev => [...prev, newRepo]);
        setCurrenteRepo("")
      }else{
        window.alert("Repository already insert")
      }
      }
    else{
      window.alert("Repository not found")
    }
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter(repo => repo.id == !id)
    setRepos(newRepos)
  }

  return (
    <>
      <div className='App'>
        <img src={github_logo} alt="logo GitHub" />
        <Input value={currentRepo} onChange={(e) => {
          setCurrenteRepo(e.target.value)
        }}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
      </div>
    </>
  )
}

export default App

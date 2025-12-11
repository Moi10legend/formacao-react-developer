import './style.css'
import { useState } from 'react'
import { Header } from "../../components/header"
import { ItemList } from '../../components/itemlist'
import background from "../../assets/gitimage.png"

function App() {

  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json()

    if (newUser.name){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json()

      if (newRepos.length){
        setRepos(newRepos)
      }
    }
  }

  return (
      <div className='App'>
        <Header />
        <div className='content'>
          <img src={background} alt="git image" className='background' />
          <div className='informations'>
            <div>
              <input 
                name='user' 
                placeholder='@username' 
                onChange={event => setUser(event.target.value)} 
                // value={user}
                />
              <button onClick={handleGetData}>Search</button>
            </div>
            {currentUser?.name ? (<>
              <div className='profile'>
                <img src={currentUser.avatar_url} alt="" className='profilephoto'/>
                <div>
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
           </> ) : null}
            {repos?.length? (
              
              <div>
              <h4 className='repository'>Repositórios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description}/>
              ))}
              
            </div>
            ) : null}
            
          </div>
        </div>
      </div>
  )
}

export default App

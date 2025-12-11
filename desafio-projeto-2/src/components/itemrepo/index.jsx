import "./styles.css"

function ItemRepo({repo, handleRemoveRepo}){

    return(
        <div className="itemRepo">
            <h3>{repo.owner.login}</h3>
            <p>{repo.name}</p>
            <a href={repo.html_url} target="_blank">Ver repositório</a><br />
            <button onClick={() => handleRemoveRepo(repo.id)} className="remove">Remove</button>
            <hr />
        </div>
    )
}

export default ItemRepo
import React, { useState, useEffect } from "react";

const App2 = () => {
    const [usuario, setUsuario] = useState("M11");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(["Pablo", "Maria", "José"]);

    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("M11");
    };

    useEffect(() => {
        setCount(usuarios.length);
    }, [usuarios]);

    return (
        <div className="App2">
            <h1>hello Dio!</h1>
            <h3>Total: {count}</h3>
            <div>
                <input
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            <hr />
            {usuarios.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default App2;

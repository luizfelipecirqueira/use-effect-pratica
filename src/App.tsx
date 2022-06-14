import React, { useState, useEffect, ChangeEvent } from 'react';

const App = () => {
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  useEffect(() =>{
    setFullName(`${name} ${lastName}`);
  }, [name, lastName])

  return (
    <div>
      
      <input type="text" placeholder='Digite o seu nome' value={name} onChange={handleNameChange} />

      <input type="text" placeholder='Digite o seu sonrenome' value={lastName} onChange={handleLastNameChange} />

      <p>Nome completo: {fullName}</p>
    </div>
  );
}

export default App;

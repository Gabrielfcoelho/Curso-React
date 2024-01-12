import './App.css'
import { useState } from 'react'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
  
  const [nome, setNome] = useState()

  return (
    <>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </>
  )
}

export default App

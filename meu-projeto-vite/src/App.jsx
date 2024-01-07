import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
  const nome = 'Maria'

  return (
    <>
      <HelloWorld />
      <SayMyName nome="Gabriel" />
      <SayMyName nome={nome} />
      <Pessoa nome="Gabriel" idade="19" profissao="Programador" foto="https://via.placeholder.com/150" />
    </>
  )
}

export default App

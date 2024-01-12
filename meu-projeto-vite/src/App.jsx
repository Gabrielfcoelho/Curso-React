import './App.css'
import OutraLista from './components/OutraLista'

function App() {
  
  const meusItems = ['React', 'Vue', 'Angular']

  return (
    <>
      <h1>Renderizacao de Listas</h1>
      <OutraLista itens={meusItems}/>
      <OutraLista itens={[]}/>
    </>
  )
}

export default App

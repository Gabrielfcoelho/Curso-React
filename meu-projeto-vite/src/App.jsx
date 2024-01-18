import './App.css'
import NavBar from './components/NavBar'

// 2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

function App() {
  
  return (
    <>
      <NavBar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App

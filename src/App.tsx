import { Outlet } from 'react-router-dom'
import './App.css'
import MainMenu from './components/header/menu/MainMenu'

function App() {
  
  return (
<div className='wrapper bg-FOREGROUND min-h-screen'>
<header className=' bg-white shadow-lg py-4 text-sm font-bold text-CURRENT_LINE'>
    <MainMenu/>
  </header>
  <main>
    <Outlet/>
  </main>
  <footer></footer>
</div>
  )
}

export default App

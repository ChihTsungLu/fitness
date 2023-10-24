import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      {/* Render child components */}
      <Outlet/>  
    </div>
    
  )
}

export default App

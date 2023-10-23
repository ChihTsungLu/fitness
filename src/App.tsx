import { useState } from 'react'
import './App.css'
import Navbar from './Components/Natbar'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Service from './Pages/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Service/>
      <Hero/>
      <Feature/>
    </div>
    
  )
}

export default App

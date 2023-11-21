
import './App.css'

import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div>
      {/* <Navbar/> */}
      {/* Render child components */}
      <Outlet/>  
    </div>
    
  )
}

export default App

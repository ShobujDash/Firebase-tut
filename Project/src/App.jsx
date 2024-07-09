import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <h1>Home</h1> } />
        <Route path="/login" element={ <h1>Login</h1> } />
        <Route path="/register" element={ <Register/> } />
      </Routes> 
    </>
  )
}

export default App

import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import MyNavbar from './components/Navbar'
import List from './pages/List'
import Home from './pages/Home'
import BookDetailPage from './pages/Detail'
import ViewOrder from './pages/ViewOrder'
import ViewOrderDetails from './pages/ViewOrderDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/book/list" element={ <List/> } />
        <Route path="/book/view/:bookId" element={ <BookDetailPage/> } />
        <Route path="/book/orders" element={ <ViewOrder/> } />
        <Route path="/books/orders/:bookId" element={ <ViewOrderDetails/> } />
      </Routes> 
    </>
  )
}

export default App

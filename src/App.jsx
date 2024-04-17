import { useState } from 'react'
import './App.css'
import { Navigate, Outlet, redirect } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import "./server"


function App() {
  const [count, setCount] = useState(0)

  let UserAuth = true;

  return (
   <>
   <Nav/>
   {!UserAuth?<Navigate to={"/login"}/>:<Outlet />}
   <Footer/>
   </>
  )
}

export default App

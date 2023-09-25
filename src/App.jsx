import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import Donation from './Components/Donation/Donation'

function App() {

  return (
    <>
    <Navbar></Navbar>
     <Outlet>
      <Home></Home>
      <Donation></Donation>
     </Outlet>
    </>
  )
}

export default App

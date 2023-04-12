import React from 'react'
import '../App.css'

import { Link } from 'react-router-dom'
const HomePage = () => {

    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return <>
    <nav className='navbar'>

<div className='container'>

  <div className='logo'>

    <span><h1>Travelo</h1></span>

  </div>

  <div className='menu-icon' onClick={handleShowNavbar} >

    <ion-icon name="menu-outline"></ion-icon>

  </div>

  <div className={`nav-element ${showNavbar && 'active'} `} >
    <ul >
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/create-user'>User</Link>
      </li>
      <li>
        <Link to='/'>Services</Link>
      </li>
      <li>
        <Link to='/'>Contact</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  
  </>
   
  
}

export default HomePage




import { React, useState } from 'react'
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
  <i class="fa-regular fa-book-open-cover"></i>

    {/* <img src="https://images.vexels.com/content/144524/preview/library-logo-template-design-20587d.png" 
    height={50}
    width={150}
    alt=' ' className=''
 /> */}

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




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
  <span><h1>Library management</h1></span>
   

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

 {/* hero-section  */}

 
<div className="p-5 text-center bg-image rounded-3">
  <img src='./image/library-animate.svg' alt='' height={500} />
  <div className="mask" >
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Heading</h1>
        <h4 className="mb-3">Subheading</h4>
        <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>




  
  </>
   
  
}

export default HomePage




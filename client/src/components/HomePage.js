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
        <Link to='/show-list'><b>HOME</b></Link>
      </li>
      <li>
        <Link to='/create-book'><b>BOOK</b></Link>
      </li>
      <li>
        <Link to='/'><b>ABOUT</b></Link>
      </li>
      <li>
        <Link to='/'><b>CONTACT-US</b></Link>
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
        <h1 className="mb-3"><span>Library Management System</span></h1>
      </div>
    </div>
  </div>
</div>

<div className="p-5 text-center bg-image rounded-3">
    <div class="container-fluid">
            <div class="row" id="port2-second-row">
                <div class="col-xs-6 imgcont" id="port2-first-col">
                    <img src="https://assignmentpoint.com/wp-content/uploads/2013/06/Online-Library.jpg" alt=" " height={300} width={300} padding={0} />
                </div>
                <div class="col-xs-6 imgcont" id="port2-second-col">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTasNQph6qk0lkSPdu1c4BSMuKimif62KAujICU2FLr7-KKj5YYuvmG9sc3rU8jc3zRo&usqp=CAU" alt=" " padding={0} height={300} />
                </div>

            </div>
       </div>
</div>




  
  </>
   
  
}

export default HomePage




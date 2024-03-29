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
  </div>

  <div className='menu-icon' onClick={handleShowNavbar} >

    <ion-icon name="menu-outline"></ion-icon>

  </div>

  <div className={`nav-element ${showNavbar && 'active'} `} >
    <ul >
      <li className='nav'>
        <Link to='/show-list'><b>HOME</b></Link>
      </li>
      <li className='nav'>
        <Link to='/create-book'><b>BOOK</b></Link>
      </li>
      <li>
      <a class = "nav-link" href ="#content"><b>ABOUT</b></a>
       {/* <Link to='/content'><b>ABOUT</b></Link> */}
      </li>
      <li>
      <a class = "nav-link" href ="#contact"><b>CONTACT-US</b></a>
        {/* <Link to='/'><b>CONTACT-US</b></Link> */}
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

<section id="content">
<div className="p-5 text-center bg-image rounded-3">
  <p><h2 className='text-left'>Here some of our <span>library pictures:</span></h2></p>
    <div class="container-fluid">
            <div class="row" id="port2-second-row">
            <div class="col-xs-6 imgcont" id="port2-second-col">
                    <img src="https://miro.medium.com/v2/resize:fit:1200/0*36G2SMPQf5XiM05A" alt=" " padding={0} height={300} width={400} />
                </div>
                <div class="col-xs-6 imgcont" id="port2-second-col">
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b41900117083619.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg" alt=" " padding={0} height={300} />
                </div>
                <div class="col-xs-6 imgcont" id="port2-second-col">
                    <img src="https://itechindia.co/wp-content/uploads/2021/11/main-banner1.jpeg"alt=" " padding={0} height={300} width={400} />
                </div>
                <div class="col-xs-6 imgcont" id="port2-first-col">
                    <img src="https://assignmentpoint.com/wp-content/uploads/2013/06/Online-Library.jpg" alt=" " height={300} width={400} padding={0} />
                </div>
               
                <div class="col-xs-6 imgcont" id="port2-second-col">
                    <img src="https://youcanlearnhowtocode.com/wp-content/uploads/2021/03/woman-looking-at-books-in-library-668x525.jpg" alt=" " padding={0} height={300} />
                </div>
                <div class="col-xs-6 imgcont " id="port2-second-col">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMTasNQph6qk0lkSPdu1c4BSMuKimif62KAujICU2FLr7-KKj5YYuvmG9sc3rU8jc3zRo&usqp=CAU" alt=" " padding={0} height={300} width={400} />
                </div>
             </div>
       </div><br></br><br></br>

       <section>
        <p> 
         <h2><b>Why Library Management System is used?</b></h2>
              <h5><span>Library management systems</span> are used to manage the operations and resources of a library. The primary objective of a library management system is to provide an efficient and effective way to manage library resources such as books, journals, magazines, and other materials.</h5>
        </p>
        <p>
          <h2 className='text-left'><b>Advantages:</b></h2>
             <h5 className='text-left'>. A library management system can automate many tasks, including cataloging, circulation, and acquisitions.<br />
                 . Library management systems can make it easier for users to find the resources they need.<br />
                 . Library management systems can help protect library resources by tracking their location.<br />
                 . Library management systems can generate reports and analytics that help librarians.<br />
                 .  Remote access<br />
            </h5>
        </p>
     </section>
</div>
</section>

<section id="contact">

</section>




  
  </>
   
  
}

export default HomePage




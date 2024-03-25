import React from 'react'
import "../Component/Navbar.css"
import image from './image/login.jpg'

function Navbar() {
  return (

           <nav class="navbar navbar-expand-lg bg-body-black">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" className="navcontent" href="#">Home</a>
            </li> &nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <a class="nav-link " className="navcontent" href="#">About</a>
            </li>&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <a class="nav-link " className="navcontent"  href="Login">Students </a>
            </li>&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <a class="nav-link " className="navcontent" href="#">Coordinator</a>
            </li>&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <a class="nav-link " className="navcontent"  href="#">Volunteer</a>
            </li>&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <a class="nav-link " className="navcontent"  href="#">Audience</a>
            </li>&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
              <a class="nav-link " className="navcontent" href="#">Blog</a>
            </li>
          </ul>
        
    
        
      </nav >
     
	
 
  )
}

export default Navbar
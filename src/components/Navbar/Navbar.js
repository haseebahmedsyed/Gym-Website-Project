import React, { useContext, useEffect, useState } from 'react'
import Carousel from '../Carousel/Carousel'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import cartContext from '../../context/cartContext';

function Navbar() {
  let location = useLocation();



  const [mystate, setMyState] = useState(true)

  const context= useContext(cartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        setMyState(false)
      }
      else {
        setMyState(true)
      }
    })
  }, [])

  return (
    <>
      <div className='mydiv'>
        {mystate ?
          <header className='mydiv'>
            <div id="main-head">
              <h1 id="main-head-content">THE MUSCLE STUDIO</h1>
              <Link to ='/login' className="login-btn-of-main-heading">LOGIN</Link>

            </div>
            <div id="navbar ">
              <ul className="ul-nav ">
                <li className="active li-nav"><Link className="nav-button nav-active" to="/">Home</Link></li>
                <li className="li-nav"><Link className="nav-button" to="/contact">Contact Us</Link></li>
                <li className="li-nav"><Link className="nav-button" to="/aboutUs">About Us</Link></li>
                <li className="li-nav"><Link className="nav-button" to="/facilities">Facilities</Link></li>
                <li className="li-nav"><Link className="nav-button" to="/shop">Shop Gear</Link></li>
                <li className="li-nav"><Link className="nav-button" to="/package">Packages</Link></li>

                <li className="li-nav li-nav-member"><Link className="nav-button" to="/register">Register Now <i
                  className="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i></Link></li>
                {/* <li className="li-nav"><Link to ='/login' className="nav-button">LogIn</Link></li> */}
                {((location.pathname === '/shop') || (location.pathname === '/cart') || (location.pathname === '/checkout')) && <li className="li-nav-after"><Link className="nav-button btn-danger" to="/cart">Item(s) </Link></li>}
              </ul>
            </div>
          </header> :
          <header >
            <div id="navbar-2" style={{ position: 'fixed',zIndex :'1' }}>
              <ul className="ul-nav-after">
                <li className="active li-nav-after"><Link className="nav-button nav-active" to="/">Home</Link></li>
                <li className="li-nav-after"><Link className="nav-button" to="/contact">Contact Us</Link></li>
                <li className="li-nav-after"><Link className="nav-button" to="/aboutUs">About Us</Link></li>
                <li className="li-nav-after"><Link className="nav-button" to="/facilities">Facilities</Link></li>
                <li className="li-nav-after" id="main-head-content-after">THE MUSCLE STUDIO</li>
                <li className="li-nav-after"><Link className="nav-button" to="/shop">Shop Gear</Link></li>
                <li className="li-nav-after"><Link className="nav-button" to="/package">Packages</Link></li>

                <li className="li-nav-after li-nav-member">
                  <Link className="nav-button nav-button-member " to="/register">Register Now <i
                    className="fa fa-long-arrow-right fa-1x" aria-hidden="true"></i></Link>
                </li>
                {/* <li className='"li-nav-after"'><Link to ='/login' className='nav-button'>LogIn</Link></li> */}
                {((location.pathname === '/shop') || (location.pathname === '/cart') || (location.pathname === '/checkout')) && <li className="li-nav-after"><Link className="nav-button btn-danger" to="/cart">Item(s)</Link></li>}
               
              </ul>
            </div>
          </header>
        }
      </div>
    </>
  )
}

export default Navbar

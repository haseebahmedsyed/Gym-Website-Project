import React from 'react'
import './Packages.css'
import { Link, Outlet } from 'react-router-dom'
import TitaniumPlus from './TitaniumPlus'
import Titanium from './Titanium'
import Platinium from './Platinium'
import Footer from '../Footer/Footer'

function Packages() {
    return (
        <>
            <header className='header'>
                <img className='pic' src="https://atmosphere.com.pk/wp-content/uploads/2021/12/packages-banner_new.png" alt="" />
            </header>

            <div className="containerr my-5">
                
                <div className="packimg">
                    <h1 className='text-center'>Our <h1 style={{display:'inline',color:"#f6c501",fontSize:'40px'}}>Packages</h1></h1>
                    <Link to=''><img src="https://atmosphere.com.pk/wp-content/uploads/2021/12/plus.png" alt="titaniumPlus" /></Link>
                    <Link to='/package/titanium'><img src="https://atmosphere.com.pk/wp-content/uploads/2021/08/Titanium.jpg" alt="titanium" /></Link>
                    <Link to='/package/platinium'><img src="https://atmosphere.com.pk/wp-content/uploads/2021/08/Platinum.jpg" alt="platinium" /></Link>
                    <Link to='/package/gold'><img src="https://atmosphere.com.pk/wp-content/uploads/2021/08/Gold.jpg" alt="gold" /></Link>
                    <Link to='/package/silver'><img src="https://atmosphere.com.pk/wp-content/uploads/2021/08/Silver.jpg" alt="silver" /></Link>
                </div>

                <div className="content">
                <Outlet/>
                
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Packages

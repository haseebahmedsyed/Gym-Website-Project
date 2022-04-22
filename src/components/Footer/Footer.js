import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div >
            <div id="div-of-footer">
                <div className="left">
                    <h1>Opening Hours</h1>
                    <div>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span id="upper-div-of-left">Mon &#8211; Sun &nbsp;&nbsp; Male: 7:00am to 10:00pm</span>
                    </div>

                    <div>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <span id="lower-div-of-left">Mon &#8211; Sun &nbsp;&nbsp; Female: 7:00am to 10:00pm</span>
                    </div>
                </div>

                <div className="mid">
                    <h1>Contact Info</h1>
                    <div><i class="fa fa-map-marker" aria-hidden="true"></i>  Dalmia Road, Karachi, Pakistan
                    
                    </div>
                    
                    <div><i class="fa fa-phone" aria-hidden="true"></i>  Phone: &nbsp; 021-12343445</div>
                    <div><i class="fa fa-envelope" aria-hidden="true"></i>  Email: &nbsp; TheMuscleStudio@gmail.com</div>
                </div>

                <div className="right">
                    <h1>Message Us</h1>
                    <div>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="fa fa-facebook fa-4x" aria-hidden="true" id="facebook-logo"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="fa fa-instagram fa-4x" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fa fa-whatsapp fa-4x" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank">
                            <i className="fa fa-twitter fa-4x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

            <footer id="footer">&copy;2022 &#8211; THE MUSCLE STUDIO &#8211; ALL RIGHTS RESERVED</footer>
        </div>
    )
}

export default Footer

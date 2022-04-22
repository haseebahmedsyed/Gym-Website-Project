import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="container-of-login">
        <h1 id="login-main-heading">WELCOME TO <div>THE MUSCLE STUDIO</div></h1>
        <div className="login-box">
            <h1 id="login-heading">LOG <span>IN</span></h1>
            <div className="input-field">
                <div>
                    <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                    <input type="text" placeholder="Username"/>
                </div>
            </div>
            
            <div className="input-field">
                <div>
                    <i className="fa fa-key fa-2x" aria-hidden="true"></i>
                    <input id="input-field-pwd" type="password" placeholder="Password"/>
                    <div id="show-and-hide-eye">
                        <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
                        <i className="fa fa-eye-slash fa-2x" aria-hidden="true" style={{display:'none'}}></i>
                    </div>
                </div>
            </div>
    
            <div id="remember-me">
                <input type="checkbox"/>Remember Me
            </div>

            <div id="login1-btn">
                <button>LOG IN</button>
            </div>
        </div>
    </div>
  )
}

export default Login

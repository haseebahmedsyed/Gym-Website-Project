import React, { useEffect, useState } from 'react'
import './RegisterNow.css'
import ReCAPTCHA from "react-google-recaptcha";
import Footer from '../Footer/Footer';

function RegisterNow() {

    const captchaChange=(e)=>{
        alert("changed")
    }

    const MynamePattern = /^[a-zA-Z ]{3,18}$/
    const MyemailPattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const MyphonePattern = /^03+[0-9]{9}$/;

    const[myNamess,setMyNamess]=useState(null)
    const[myEmail,setMyEmail]=useState(null)
    const[myPhone,setMyPhone]=useState(null)
    const[Myage,setAge]=useState(null)
    const[pass,setPass]=useState(null)
    const[Repass,setRePass]=useState(null)
    const[pack,setPack]=useState(null)
    const[weight,setWeight]=useState(null)

    const handleMyNameKeyUp = (e)=>{
        if(e.target.value === ""){
            setMyNamess("")
        }
        else if(MynamePattern.test(e.target.value)){
            setMyNamess(true)
        }
        else{
            setMyNamess(false)
        }
    }

    const handleMyEmailKeyUp=(e)=>{
        if(e.target.value === ""){
            setMyEmail("")
        }
        else if(MyemailPattern.test(e.target.value)){
            setMyEmail(true)
        }
        else{
            setMyEmail(false)
        }
    }

    const handleMyPhoneKeyUp=(e)=>{
        if(e.target.value === ""){
            setMyPhone("")
        }
        else if(MyphonePattern.test(e.target.value)){
            setMyPhone(true)
        }
        else{
            setMyPhone(false)
        }
    }

    const handleAge=(e)=>{
        if(e.target.value===""){
            setAge("")
        }
        else if(e.target.value>=18){
            setAge(true)
        }
        else{
            setAge(false)
        }
    }


    return (
        <>
        <section id="register-now-section">
            <div className="img-div py-3">
                <h1 className="register-now-heading">REGISTER NOW</h1>
                <img src="https://atmosphere.com.pk/wp-content/uploads/2020/10/Register.jpg" alt="" />
            </div>

            <div className="register-now-div">
                <form action="noaction.php">
                    <label htmlFor="package">Select Package:</label>
                    <select id={pack!==null&&"success"} className="regNow-inputs">
                        <option value="package">Select Package</option>
                        <option value="package">Titanium Plus</option>
                        <option value="package">Titanium</option>
                        <option value="package">Platinum</option>
                        <option value="package">Gold</option>
                        <option value="package">Silver</option>
                    </select>

                    <label>Name:</label>
                    <input className="regNow-inputs"  onChange={handleMyNameKeyUp} type="text" id={(myNamess=== "" && myNamess!== null ) ? "null1":(myNamess===true && myNamess!== null) ? "success1":(myNamess===false && myNamess!== null) && "error1"} placeholder="Enter Your Name" />

                    <label >Email Address:</label>
                    <input  className="regNow-inputs" onChange={handleMyEmailKeyUp} id={(myEmail=== "" && myEmail!== null ) ? "null1":(myEmail===true && myEmail!== null) ? "success1":(myEmail===false && myEmail!== null) && "error1"} type="email" placeholder="Enter Your Email Address" />

                    <label >Password:</label>
                    <input className="regNow-inputs"  type="password" id= {pass!==null&&"null1"} placeholder="Enter Your Password" />

                    <label >Re-Enter Password:</label>
                    <input className="regNow-inputs"  type="password" id={Repass!==null&&"null1"} placeholder="Re-Enter Your Password" />

                    <label Contact> Number:</label>
                    <input className="regNow-inputs"  onChange={handleMyPhoneKeyUp} type="number" id={(myPhone=== "" && myPhone!== null ) ? "null1":(myPhone===true && myPhone!== null) ? "success1":(myPhone===false && myPhone!== null) && "error1"} placeholder="Enter Your Phone Number" />

                    <label htmlFor="age">Age:</label>
                    <input className="regNow-inputs"  onChange={handleAge} id={(Myage=== "" && Myage!== null ) ? "null1":(Myage===true && Myage!== null) ? "success1":(Myage===false && Myage!== null) && "error1"} type="text"  placeholder="Enter Your Age" />

                    <label> Weight:</label>
                    <select className="regNow-inputs" id={weight!==null&&"success"}>
                        <option value="weight">Select Your Weight Range</option>
                        <option value="30-40">30-40 Kg</option>
                        <option value="40-50">40-50 Kg</option>
                        <option value="50-60">50-60 Kg</option>
                        <option value="60-70">60-70 Kg</option>
                        <option value="70-80">70-80 Kg</option>
                        <option value="80-90">80-90 Kg</option>
                        <option value="90-100">90-100 Kg</option>
                        <option value="100-110">100-110 Kg</option>
                        <option value="110-120">110-120 Kg</option>
                    </select>

                    <label htmlFor="gender">Gender:</label>
                    <span id="gender-radio-button">
                        <input   type="radio" name="gender" /><span>Male</span>
                        <input   type="radio" name="gender" /><span>Female</span>
                    </span>

                    {/* <div className="g-recaptcha brochure_form_captcha" data-sitekey="6Lf3eXwfAAAAAGFBR-0YS5LfzLuG-GiPqjBOXoVd"></div> */}

                    <ReCAPTCHA className='my-3 success'
                        // sitekey=' 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                        sitekey='6Lf3eXwfAAAAAGFBR-0YS5LfzLuG-GiPqjBOXoVd'
                        onChange={captchaChange}
                    />

                    <button  type="btn" id="submit-btn" >SUBMIT</button>
                </form>
            </div>
        </section>

        <Footer/>

        </>
    )
}

export default RegisterNow

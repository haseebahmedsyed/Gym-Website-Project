import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import Footer from '../Footer/Footer';
import './Bill.css'

function Bill() {

  const refopen = useRef(null);
  const navigate = useNavigate()
  const array = JSON.parse(localStorage.getItem('cartArray'))

  const total = array.reduce(function (total, obj) {
    return (
      total += Number(obj.quantity) * Number(obj.price)
    )
  }, 0)

  const len = (JSON.parse(localStorage.getItem('cartArray'))).length

  const handleOnSubmit = (e) => {
    e.preventDefault();
    refopen.current.click();
    console.log(checker)

    localStorage.setItem("cartArray", JSON.stringify([]))


  }

  const cityPattern2 = /^[a-zA-Z ]{3,18}$/
  const addressPattern2 = /^[a-zA-Z0-9 ,-]{3,30}$/
  const postalcodePattern2 = /^[0-9]{5}$/
  const emailPattern2 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern2 = /^03+[0-9]{9}$/;
  const ownerPattern2 = /^[a-zA-Z ]{3,18}$/
  const cardNumPattern2 = /^[4||5]{1}[0-9]{15}$/
  const ccvPattern2 = /^[0-9]{3}$/

  const[myCredentials,setMyCredentials]=useState({city:"",address:"",postalcode:"",email:"",phone:"",payMethod:"",owner:"",cardNum:"",expDate:"",ccv:""})

  const [checker,SetChecker]=useState(null)

    const handleRegOnChange=(e)=>{
      SetChecker(null)
      setMyCredentials({...myCredentials,[e.target.name]:e.target.value})
      if(e.target.value===""){
        SetChecker(e.target.name+"blank")
      }
      else if(eval(`${e.target.name}Pattern2`).test(e.target.value)){
        SetChecker(e.target.name)
      }
      else{
        SetChecker(e.target.name+"not")
      }


    }



  return (
    <>

      <div className="container py-5">

        <div className="summary">
          <h1 className='text-center' style={{ color: '#f6c501' }}>SUMMARY</h1>
          <hr />
          <h3 className='text-center'> {len} Items in cart  <i className="fa fa-shopping-cart" aria-hidden="true"></i></h3>
          <hr />
          <table className="tables overflow_control my-5">
            <thead>
              <tr className='tr'>
                <th>Product Name</th>
                <th>Quantity</th>
                <th className='px-3'>Price</th>
              </tr>
            </thead>
            <tbody >

              {array.map((element, i) => {
                return <tr >
                  <td className='px-2 py-2' >{element.name}</td>
                  <td className='px-4'>{element.quantity}</td>
                  <td className='px-2'>{element.quantity * element.price}</td>
                </tr>
              })}



            </tbody>
          </table>
          <hr />

          <h2 className='text-center'>Total Price : {total}</h2>
        </div>
        <div className="checkout" >
          <h1 className='text-center mb-4' style={{ color: '#f6c501' }}>CHECKOUT</h1>
          {/* <form > */}
          <div className='py-2'>
            <label >City</label><br />
            <input className='inputBoxes' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="text" name="city" id={(checker=== "cityblank" &&  checker!==null)?"null3":(checker=== "city" &&  checker!==null)?"success3":(checker==="citynot" &&  checker!==null) &&"error3"} required />
          </div> 
          <div className='py-2'>
            <label >Address</label><br />
            <input className='inputBoxes' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="text" name="address" id={(checker=== "addressblank" &&  checker!==null)?"null3":(checker=== "address" &&  checker!==null)?"success3":(checker==="addressnot" &&  checker!==null) &&"error3"} required />
          </div>
          <div className='py-2'>
            <label >Postal Code</label><br />
            <input className='inputBoxes' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="text" name="postalcode" id={(checker=== "postalcodeblank" &&  checker!==null)?"null3":(checker=== "postalcode" &&  checker!==null)?"success3":(checker==="postalcodenot" &&  checker!==null) &&"error3"} required />
          </div>
          <div className='py-2'>
            <label >Email</label><br />
            <input className='inputBoxes' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="email" name="email" id={(checker=== "emailblank" &&  checker!==null)?"null3":(checker=== "email" &&  checker!==null)?"success3":(checker==="emailnot" &&  checker!==null) &&"error3"} required />
          </div>
          <div className='py-2'>
            <label >Phone</label><br />
            <input className='inputBoxes' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} type="tel" name="phone" id={(checker=== "phoneblank" &&  checker!==null)?"null3":(checker=== "phone" &&  checker!==null)?"success3":(checker==="phonenot" &&  checker!==null) &&"error3"} required />
          </div>

          <div className='my-3'>
            <p className='text-center' style={{ fontSize: '27px' }}>SELECT PAYMENT METHOD</p>

            <div className="row my-5 text-center">
              <div className="col-md-6">
                <input type="radio" onChange={handleRegOnChange} name="payMethod" id='methodPay' />
                <label className='mx-3' >Pay With Card</label>
              </div>
              <div className="col-md-6">
                <input type="radio" onChange={handleRegOnChange} name="payMethod" id='methodPay' />
                <label className='mx-3' >Cash On Delivery</label>
              </div>
            </div>

            <div className='row my-2'>
              <div className='col-md-6'>
                <label>Owner</label><br />
                <input className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} id={(checker=== "ownerblank" &&  checker!==null)?"null3":(checker=== "owner" &&  checker!==null)?"success3":(checker==="ownernot" &&  checker!==null) &&"error3"} type="text" name='owner' />

              </div>
              <div className="col-md-6">
                <label>Card Number</label><br />
                <input className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} id={(checker=== "cardNumblank" &&  checker!==null)?"null3":(checker=== "cardNum" &&  checker!==null)?"success3":(checker==="cardNumnot" &&  checker!==null) &&"error3"} type="text" name='cardNum' />
              </div>

              <div className="col-md-6">
                <label>Expire Date</label><br />
                <input className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange}  type="date" name='expDate' />
              </div>
              {/* </div> */}

              <div className="col-md-6">
                <label>CCV</label><br />
                <input className='pay my-2' style={{width:'100%',height:'45px',outline:'none'}} onChange={handleRegOnChange} id={(checker=== "ccvblank" &&  checker!==null)?"null3":(checker=== "ccv" &&  checker!==null)?"success3":(checker==="ccvnot" &&  checker!==null) &&"error3"} type="text" name='ccv' />
              </div>
            </div>

          </div>
          <div className="btnConfirmPurchase">
            <button type='button' onClick={handleOnSubmit} className='btn' id="submit-btn" >CONFIRM PURCHASE</button>
          </div>

          {/* </form> */}
        </div>

      </div>


      <div className="container">


        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={refopen} data-bs-target="#exampleModalCenter">
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" >
              <div className="modal-header" style={{ backgroundColor: "grey" }}>
                {/* <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
                <button type="button" onClick={() => navigate('/shop')} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body" style={{ color: 'white', backgroundColor: 'black', fontSize: "40px" }}>
                Thanks for shopping. Your order will be deliver within 15 days!!!
              </div>
              <div className="modal-footer" style={{ backgroundColor: "grey" }}>
                <button style={{ backgroundColor: 'red', color: 'white' }} type="button" onClick={() => navigate('/shop')} className="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Bill

import React, { useContext } from 'react'
import cartContext from '../../context/cartContext';
import './Products.css'

function Products(props) {

    const context = useContext(cartContext);


    return (
        <div className='row'  >
            {props.ProductArray.map((element) => {
                return <div className='col-md-4 my-3' style={{paddingLeft:'-5px',marginLeft:"-5px"}}>
                    <div className='card' style={{backgroundColor:'black',border:'3px solid white',borderRadius:'5' }}>
                        <img src={element.image} className="card-img-top" alt="image" />
                        <div className="card-body">
                            {/* <h5 className="card-title text-center">{element.name} ${element.price}</h5> */}
                            <h5 className="card-price text-center">${element.price}</h5>
                            <h5   className="card-title text-center">{element.name} </h5>
                            <button onClick={()=>{context.handleAddCartClick(element)}} className="btn my-3">Add to card</button>
                        </div>
                    </div>
                </div>
            })}
        </div>

    )
}

export default Products

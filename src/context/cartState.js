import React, { useState } from 'react'
import cartContext from './cartContext'
// import ProductArray from '../components/shop/ProductArray'

function CartState(props) {


    const myArrray=JSON.parse(localStorage.getItem("cartArray"))
    if(myArrray===null){
      localStorage.setItem('cartArray',JSON.stringify([]))
    }
    
    const [mySecondArray,setmySecondArray]= useState([])
    
    const handleAddCartClick=(product)=>{
      
      const myArray=JSON.parse(localStorage.getItem("cartArray"))

        const findingArray = myArray.find(element=>product.id===element.id)
        if(findingArray=== undefined){
            let obj={}
            if(product.id){obj.id=product.id}
            if(product.name){obj.name=product.name}
            if(product.price){obj.price=product.price}
            obj.quantity = 1
            myArray.push(obj)
            localStorage.setItem("cartArray", JSON.stringify(myArray))
        }
        else{
            alert("Already added to cart");
        }
        


    }

  return (
    <cartContext.Provider value={{handleAddCartClick}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartState

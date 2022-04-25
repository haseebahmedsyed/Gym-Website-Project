import React, { useState } from 'react'
import cartContext from './cartContext'
// import ProductArray from '../components/shop/ProductArray'

function CartState(props) {


    const myArrray=JSON.parse(localStorage.getItem("cartArray"))
    if(myArrray===null){
      localStorage.setItem('cartArray',JSON.stringify([]))
    }
    
    const [mySecondArray,setmySecondArray]= useState([])

    let ab = JSON.parse(localStorage.getItem("itemNo"))

    const [myItems,setMyItems]=useState(ab)
    
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

            if(JSON.parse(localStorage.getItem("itemNo"))===null){
              localStorage.setItem("itemNo",JSON.stringify(1))
              setMyItems(1)


            }
            else{
              
              let item = JSON.parse(localStorage.getItem("itemNo"))
  
              localStorage.setItem("itemNo",JSON.stringify(item+1))
              setMyItems(item+1)
            }
        }
        else{
            alert("Already added to cart");
        }
        


    }

  return (
    <cartContext.Provider value={{handleAddCartClick,myItems , setMyItems}}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartState

import React from 'react'
import Products from './Products'
import ProductArray from './ProductArray'
import './ShopItems.css'
import Footer from '../Footer/Footer'
function ShopItems() {
    return (
    <>
        <div id="shop-gear-heading">
            <h1>SHOP GEAR</h1>
        </div>
        <Products  ProductArray={ProductArray}/>

        <Footer/>
     </>
    )
}


export default ShopItems

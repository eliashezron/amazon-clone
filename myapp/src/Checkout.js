import React from 'react'
import{useStateValue} from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
function Checkout() {
    const[{basket}] = useStateValue()

    return (
        <div className ="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" 
            src="https://adexchanger.com/wp-content/uploads/2018/02/shutterstock_376692970.jpg" 
            alt=""/>

            {basket?.length === 0 ? (
                <div>
                <h2> Your Shopping BASKEST is empty</h2>
                <p>
                    you have no items in your basket. to buy one, click "Add to basket"
                    next to the item.
                </p>
                </div>
            ):(
                <div>
                <h2 className = "checkout_title"> Your shopping basket</h2>
                {/* listout the checkouted products */}
                {basket?.map((item) => {
                    console.log(item)
                    return(
                <CheckoutProduct
                    id= {item.id}
                    title={item.title}
                    image = {item.image}
                    price = {item.price}
                />)
                })}
                </div>
            )}
    </div>
        {basket.length>0 && (
            <div className="checkout_right">
             <Subtotal/> 
            
            </div>
        )}
        
    ); 
    </div>

   
               
    )}
export default Checkout

import React from 'react'
import "./CheckoutProduct.css"
import{useStateValue} from "./StateProvider"
function CheckoutProduct({id, title, image, price, rating}) {
    // eslint-disable-next-line 
    const [{},
        dispatch] =useStateValue();
   console.log(id, title, image, price, )
            
     const removeFromBasket = () =>{
    //remove from item to basket
        dispatch({
                    type:'REMOVE_FROM_BASKET',
                    id:id,
              }
                    )
    }
    return (
        <div className="checkoutProduct">
            
            <img className="checkoutProduct_image" src={image} alt=""/>
            
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
            <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    // eslint-disable-next-line 
    const [{},
         dispatch] =useStateValue();

    const addToBasket = () =>{
        //add item to basket
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
               title: title,
                image:image,
                price:price,
                rating:rating
            }
        })
    };

    return (
    <div className="product__info">
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>UGx</small>
                <strong>{price}</strong>
            </p>
            {/* 
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p><span img="⭐"></span></p>
                    ))
                }
            </div>
             */}
             
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    </div>
    )
}

export default Product

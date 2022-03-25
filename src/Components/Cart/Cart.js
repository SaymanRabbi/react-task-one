import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const {strMealThumb,strMeal,strInstructions}=cart
    return (
        <div className='cart-info'>
            <img src={strMealThumb} alt="" />
            <div>
                <h4 className='text-warning fw-bold ms-2' >Name{strMeal}</h4>
                <p  className='text-warning fw-bold ms-2'>{strInstructions.slice(0,50)}</p>
             </div>
        </div>
    );
};

export default Cart;
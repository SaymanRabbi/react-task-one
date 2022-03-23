import React from 'react';
import"./Cart.css"

const Cart = ({cartname}) => {
    return (
        <div className='cart'>
            <h2 className='text-center'>Cart</h2>
            <p>Product Name:{cartname}</p>
        </div>
    );
};

export default Cart;
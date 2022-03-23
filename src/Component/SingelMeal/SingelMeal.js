import React from 'react';
import"./SingelMeal.css"
const SingelMeal = (props) => {
    const { strCategoryThumb, strCategory, strCategoryDescription } = props.meal;
    const {handelclick}=props
    // console.log(props.meal)
    return (
        <div className='singel-product'>
            <img src={strCategoryThumb} alt="" />
            <div className='product-info'>
                <h4>
                    Name:{strCategory}
                </h4>
                <p>{strCategoryDescription.slice(0,80)}</p>
            </div>
            <button className='addToCart' onClick={()=>{handelclick(strCategory)}}>Add To Cart</button>
        </div>
    );
};

export default SingelMeal;
import React from 'react';
import './ShowDataUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
const ShowDataUI = ({ data,clickHandeler }) => {
    const { strMealThumb, strMeal, strInstructions } = data;
    return (
        <div className='card-info'>
            <img src={strMealThumb} className="img-fluid" alt="" />
            <h3 className='color'>Name :{strMeal}</h3>
            <p className='color'>{strInstructions.slice(0, 80)}</p>
            <button className='buttons' onClick={()=>{clickHandeler(data)}}>Add To Cart<FontAwesomeIcon className='ms-1 fs-5 text-danger' icon={faBagShopping}/></button>
        </div>
    );
};

export default ShowDataUI;
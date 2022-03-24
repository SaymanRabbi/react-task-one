import React from 'react';
import './ShowDataUI.css'

const ShowDataUI = ({ data }) => {
    const{strMealThumb,strMeal,strInstructions}=data
    return (
        <div className='card-info'>
            <img src={strMealThumb} className="img-fluid" alt="" />
            <h3 className='color'>Name :{strMeal}</h3>
            <p className='color'>{strInstructions.slice(0, 80)}</p>
            <button className='button'>Details</button>
        </div>
    );
};

export default ShowDataUI;
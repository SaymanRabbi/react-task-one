import React, { useEffect, useState } from 'react';
import SingelMeal from '../SingelMeal/SingelMeal';
import"./Meal.css"

const Meal = () => {
    const [meals, setMeals] = useState([]);
    // console.log(meals)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>res.json()).then(data =>setMeals(data.categories))
    }, [])
       return (
        <div className='containers'>
               <div className='product-container'>
               {
                meals.map(meal=><SingelMeal meal={meal} key={meal.idCategory}></SingelMeal>)
           } 
               </div>
               <div className='cart-container'>
                   <h2>Hi</h2>
               </div>
        </div>
    );
};

export default Meal;
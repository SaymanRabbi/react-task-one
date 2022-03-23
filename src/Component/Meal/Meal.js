import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingelMeal from '../SingelMeal/SingelMeal';
import"./Meal.css"

const Meal = () => {
    const [meals, setMeals] = useState([]);
    const[cartname, setCartname] = useState([]);
    // console.log(meals)
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(res=>res.json()).then(data =>setMeals(data.categories))
    }, [])
    const handelClick = (Name)=>{
        setCartname(Name)
    }
       return (
        <div className='containers'>
               <div className='product-container'>
               {
                meals.map(meal=><SingelMeal meal={meal} handelclick={handelClick} key={meal.idCategory}></SingelMeal>)
           } 
               </div>
               <div className='cart-container'>
                   <Cart cartname={cartname}></Cart>
               </div>
        </div>
    );
};

export default Meal;
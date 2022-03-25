import React, { useEffect, useState } from 'react';
import ShowDataUI from '../ShowDataUI/ShowDataUI';
import './Api.css'

const Api = ({ value,clickHandeler }) => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`).then(res=>res.json()).then(data=>setData(data.meals))

    },[value])
    return (
        <div className='card-container'>
            {
                data.map(singeldata=><ShowDataUI data={singeldata} clickHandeler={clickHandeler} key={singeldata.idMeal}></ShowDataUI>)
            }
        </div>
    );
};

export default Api;
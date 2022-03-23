import React, { useEffect, useState } from 'react';

const Api = () => {
    const { data, setData } = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json()).then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Api;
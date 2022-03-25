import './App.css';
// import Api from './Component/Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { useState } from 'react';
import Api from './Components/Header/Api/Api';
import Hero from './Components/Header/Hero/Hero';
function App() {
  const [value, setValue] = useState('');
  const [details, setDetails] = useState([]);
  // console.log(details)
  const CompareData = (ProductDetails) => {
    const isAvilabel = details.find(product => product.idMeal === ProductDetails.idMeal);
    if (!isAvilabel) {
      const newDetails = [...details, ProductDetails];
      setDetails(newDetails);
    }
  }
  return (
    <div className='app'>
      <Header setValue={setValue} details={details}></Header>
      <Hero></Hero>
      <Api value={value} clickHandeler={CompareData}></Api>
    </div>
  );
}

export default App;

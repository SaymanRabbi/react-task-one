import './App.css';
// import Api from './Component/Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { useState } from 'react';
import Api from './Components/Header/Api/Api';
import Hero from './Components/Header/Hero/Hero';


function App() {
  const [value, setValue] = useState('');
  return (
    <div className='app'>
      <Header setValue={setValue}></Header>
      <Hero></Hero>
      <Api value={value}></Api>
    </div>
  );
}

export default App;

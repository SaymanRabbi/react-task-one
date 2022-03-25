import './App.css';
// import Api from './Component/Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { useState } from 'react';
import Api from './Components/Header/Api/Api';
import Hero from './Components/Header/Hero/Hero';
import Modal from 'react-modal';
import Cart from './Components/Cart/Cart';
// -----Custom Style------
const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '2000',
    height: '500px',
    overflow:"scroll",
  },
};
function App() {
  
  const [value, setValue] = useState('');
  const [details, setDetails] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  // console.log(details)
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const CompareData = (ProductDetails) => {
    const isAvilabel = details.find(product => product.idMeal === ProductDetails.idMeal);
    if (!isAvilabel) {
      const newDetails = [...details, ProductDetails];
      setDetails(newDetails);
    }
  }
  return (
    <div className='app'>
      <Header setValue={setValue} details={details} openModal={openModal}></Header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {
          details.map(detail=> <Cart cart={detail}> </Cart>)
       }
       <h1 onClick={closeModal}>X</h1>
      </Modal>
      <Hero></Hero>
      <Api value={value} clickHandeler={CompareData}></Api>
    </div>
  );
}

export default App;

import './App.css';
// import Api from './Component/Api/Api';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Meal from './Component/Meal/Meal';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Api></Api> */}
      <Meal></Meal>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Product from './components/Product';
import './index.css';
import products from "./products.json"

function App() {
  const [basket,setBasket] = useState([])
  return (
    <>
      <Header />
      <div className="productContainer">
        <div className="productBoxs">
          {
            products.map(product => {
             return <Product basket={basket} setBasket={setBasket} product={product} />
            })
          }
        </div>
        <Basket />
      </div>
    </>
  );
}

export default App;

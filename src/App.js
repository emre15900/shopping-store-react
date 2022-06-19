<<<<<<< HEAD
import { useState } from 'react';
=======
>>>>>>> ae380b5268e99efda6dd759622eb9e29e4615c22
import Basket from './components/Basket';
import Header from './components/Header';
import Product from './components/Product';
import './index.css';
import products from './products.json';
import {useState,useEffect} from 'react';
function App() {  
  const [basket,setBasket] = useState([]);
  const [cost,setCost] = useState("");

  useEffect( () => {
    const totalPrice = basket.reduce((pre,basket) => pre +(basket.amount*basket.price),0);
    setCost(totalPrice);

  },[basket])

<<<<<<< HEAD
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
=======
  return (
    <>
    <Header/>

    <div className='productContainer'>
    <div className='productBoxs'>

    {
      products.map(product => (
        <Product key = { product.id} basket={basket} setBasket={setBasket}  product={product} />
        ))
    }

    </div>
    <Basket cost={cost} basket={basket}/>
    </div>

>>>>>>> ae380b5268e99efda6dd759622eb9e29e4615c22
    </>
    
    );
}

export default App;
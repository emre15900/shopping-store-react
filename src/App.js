import Header from './components/Header';
import Product from './components/Product';
import './index.css';
import products from "./products.json"
import {useState, useEffect} from 'react';
function App() {

  const [basket, setBasket] = useState([]);

  useEffect(()=>{
    console.log(basket);
  }, [basket])

  return (
    <>
      <Header />
      <div className="productContainer">
        <div className="productBoxs">
          {
            products.map(product => {
             return <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;

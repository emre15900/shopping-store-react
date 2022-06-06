import Header from './components/Header';
import Product from './components/Product';
import './index.css';
import products from "./products.json"

function App() {
  return (
    <>
      <Header />
      <div className="productContainer">
        <div className="productBoxs">
          {
            products.map(product => {
             return <Product product={product} />
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;

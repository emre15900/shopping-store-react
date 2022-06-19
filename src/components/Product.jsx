import React from 'react'

function Product({product, basket, setBasket}) {
 function addBasket(){
   const addFind = basket.find(item => item.id === product.id )
   
 }
  return (
    <div>
        <div className="product">
            <div className="countProduct">
            <button onClick={addBasket}>+</button> <b>0</b> <button>-</button>
            </div>
            <img src={product.img} />
            <div className="productsInfo">
                <p>{product.name}</p>
                <p>$ {product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Product
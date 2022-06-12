import React from 'react'

function Product({product, basket, setBasket}) {

  function addBasket() {
    const addFind = basket.find(item => item.id === product.id)
    if (addFind) {
      addFind.amount += 1;
      setBasket([...basket.filter(item => item.id !== product.id), {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: addFind.amount,
        img: product.img
      }])
    }
    else {
      setBasket([...basket,{
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1,
        img: product.img
      }])
    }
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
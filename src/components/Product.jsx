import React from 'react'

function Product({product}) {
  return (
    <div>
        <div className="product">
            <div className="countProduct">
            <button>+</button> <b>0</b> <button>-</button>
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
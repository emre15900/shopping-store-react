import React from 'react'

function Product({product}) {
  return (
    <div>
        <div className="product">
            <img src={product.img} />
        </div>
    </div>
  )
}

export default Product
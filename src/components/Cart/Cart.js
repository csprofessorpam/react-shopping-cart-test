import React from 'react'

function Cart(props) {
  return (
    <div>
      <h1>Cart</h1>
      {props.cartProducts.map(item => (
           <div>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
           </div>
      ))}
    </div>
  )
}

export default Cart
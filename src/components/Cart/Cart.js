import React from 'react'
import './Cart.css';

//add button to remove product
function Cart(props) {

  //function to calculate total of cart items
  const calcTotal = () =>{
    let total = props.cartProducts.reduce( (sum, curprod)=>
                 sum += (curprod.quantity * curprod.price), 0);
          
    console.log('total', total);
    return total.toFixed(2);
  }

  return (
    <div>
      <div className="cart-headings">
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Remove</h4>
      </div>
      <div >
      { props.cartProducts.map(item => (
           <div className='cart-item' key={item.id}>
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <p>{item.price}</p>
            {item.quantity >= 2 &&
            <p onClick = {()=>props.updateCartQuantity(item, false)}>-</p>}
            <p>{item.quantity}</p>
            <p onClick = {()=>props.addProductToCart(item)}>+</p>
            <button className='btn-trash' onClick={()=>props.removeFromCart(item)}><i className="fa fa-trash" aria-hidden="true"></i></button>
           </div>
      ))}
      </div>
      {props.cartProducts.length > 0 && <h3>TOTAL: {calcTotal()}</h3>}
    </div>
  )
}

export default Cart
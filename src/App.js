
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
//import Product from './components/Product/Product';
import './App.css';



function App() {
  

  //create state for products added

  const [cartProducts, setCartProducts] = React.useState([]);

  //function to be used by ProductDetail
  function addProductToCart(productToAdd){
      console.log(productToAdd);
      //add to the state
      //...copy what is there, then add extra one
      setCartProducts([...cartProducts, productToAdd])
      //setCartProducts("hello");
  }

  return (
    //JSX
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* http://localhost:3000/products/2 */}
        
       <Route exact path='/products' element={<Homepage />} />
       <Route path='/products/:id' element={<ProductDetail addProductToCart={addProductToCart}/>} />
        <Route path='/cart' element={<Cart cartProducts = {cartProducts}/>} />
        <Route path='/contact' element = {<Contact />} /> 
        {/*if nothing matches go here */}
         <Route path="*" element={<Navigate to="/products" replace />} />  
      </Routes>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;

/* <Product title={productInfo.title} 
      price={productInfo.price}
      category={productInfo.category}
      image={productInfo.image}/> 
      <Product title = "speaker"/> */

      // const productInfo = {
  //   "id": 1,
  //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   "price": 109.95,
  //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   "category": "men's clothing",
  //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   "rating": {
  //   "rate": 3.9,
  //   "count": 120
  //   }
  //   };
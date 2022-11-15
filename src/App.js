
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

  const [productSearchValue, setProductSearchValue] = React.useState('');

  //function to be used by ProductDetail
  function addProductToCart(productToAdd){
      //console.log(productToAdd);
      //if productToAdd is NOT in cart, add with a qty of 1
      //else increment qty of object already in cart
      //create array for the new state
      let newCart = [];
      //look for product in cart
      const match = cartProducts.find(prod=> prod.id === productToAdd.id);
      console.log("match is", match);
      //if not there match will be undefined which is "falsy"

      if (!match){
        console.log("first buy");
        //add with quantity of 1
        console.log('before qty', productToAdd);
        //new state is everything already there plus new object with quantity of 1.
        newCart = [...cartProducts, {...productToAdd, quantity: 1}];
        console.log('new cart', newCart);
        setCartProducts(newCart);
        //statement below does not work for some reason???
        //setCartProducts([...cartProducts], {...productToAdd, quantity: 1})
        //console.log('after qty', {...productToAdd, quantity: 1})
      }
      else{
        console.log("increase qty");
        updateCartQuantity(match, true);
        /*
        //add but increment 
        const newqty = match.quantity + 1;
        console.log("new qty is " + newqty);
        //have to map cartProducts to increment the quantity of the one that matches, leave the others alone
        newCart = cartProducts.map(prod=>
          prod.id === match.id ?
          {...productToAdd, quantity: newqty} : prod
        )
        //console.log('new cart', newCartProducts);
        //reset state to this array
        setCartProducts(newCart);
        */
        
      }
      //replace the state
      //setCartProducts(newCart);
      //add to the state
      //...copy what is there, then add extra one
      //setCartProducts([...cartProducts, productToAdd])
      //setCartProducts("hello");
  }

  function updateCartQuantity(productToChange, increase){
    let newqty = productToChange.quantity + 1;
    if (!increase){
      newqty = productToChange.quantity - 1;;
    }

    //have to map cartProducts to increment the quantity of the one that matches, leave the others alone
    const newCart = cartProducts.map(prod=>
      prod.id === productToChange.id ?
      {...productToChange, quantity: newqty} : prod
    )
    //replace the state
    setCartProducts(newCart);

  }

  //create function to remove product
  function removeFromCart(productToRemove){
      //console.log(productToRemove);
      //use filter to create a new array without this product
      const newCartProducts = cartProducts.filter(item=> item.id !== productToRemove.id)
      console.log(newCartProducts);
      //now make this the new state
      setCartProducts(newCartProducts);
  }

  function handleProductSearch( searchInput ){
    console.log('in App searchInput', searchInput);
    setProductSearchValue(searchInput);
  }

  //pass this function as a prop to Cart
  return (
    //JSX
    <div className="App">
      
      <BrowserRouter>
      <Navbar handleProductSearch={handleProductSearch}/>
      <Routes>
        {/* http://localhost:3000/products/2 */}
        
       <Route exact path='/products' element={<Homepage 
       productSearchValue={productSearchValue}
       />} />

       <Route path='/products/:id' element={<ProductDetail addProductToCart={addProductToCart}/>} />

        <Route path='/cart' element={
        <Cart cartProducts = {cartProducts} 
        removeFromCart={removeFromCart}
        addProductToCart={addProductToCart}
        updateCartQuantity={updateCartQuantity}
        />} />

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
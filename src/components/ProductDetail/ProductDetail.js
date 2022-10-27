
import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
import './ProductDetail.css';

function ProductDetail(props) {

    console.log('get param');
    const params = useParams();
    console.log(params.id);
    //params.id has data
    //id is the parameter set in the Route
    //useParams returns an object
    //{id} is destructuring the object
    //object destructuring

    //need state for selected product
    
    const [selectedProduct, setSelectedProduct] = React.useState();

    //when page loads, go to api and get product info for this id
    React.useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>{ 
          console.log(res.data);
          setSelectedProduct(res.data)
        })

    }, []);
    

    

  return (
    <div className="prod-container">   
          <img src={selectedProduct?.image}/> 
          <div className="prod-info">
              <h3>{selectedProduct?.title}</h3>
              <p>{selectedProduct?.price}</p>
              <p>{selectedProduct?.description}</p>
              <button onClick = {()=>props.addProductToCart(selectedProduct)}>Add to Cart</button>
          </div> 
    </div>
  )
}

//first render - selected product is not available (default state is empty)
//componentDidMount - fetch product from api
//second render - when selected product data is there (using optional chaining)

export default ProductDetail
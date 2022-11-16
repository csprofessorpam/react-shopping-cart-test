import React from 'react';  //needed for state
import './Homepage.css';
import Product from '../Product/Product';
import axios from 'axios';

function Homepage(props) {

    //create state for Products
    const [products, setProducts] = React.useState([
        // {
        //     "id": 1,
        //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        //     "price": 109.95,
        //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        //     "category": "men's clothing",
        //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        //     "rating": {
        //     "rate": 3.9,
        //     "count": 120
        //     }
        // },
        // {
        //     "id": 2,
        //     "title": "Another Backpack",
        //     "price": 99.95,
        //     "description": "Your basic backpack",
        //     "category": "sports",
        //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        //     "rating": {
        //     "rate": 3.9,
        //     "count": 120
        //     }
        // }

    ]);

    //create function
    const fetchProducts = () =>{
        
        axios.get('https://fakestoreapi.com/products')
        //.then(response => console.log(response))
        .then(response => setProducts(response.data))
        console.log("fetch was clicked");
    }

    //get data when page loads
    React.useEffect(
        ()=>{
            fetchProducts()
        }, []
    )
    
    const filterProducts = () =>{
        if (props.productSearchValue === ''){
            return products;
        }
        //if here then filter
        const newProducts = products.filter(
            item => item.title.toLowerCase().includes(props.productSearchValue.toLowerCase())
            )
        return newProducts;
    }

  return (
    <div className="product-container">
        {/* <button onClick={fetchProducts}>Fetch Products</button> */}
        {filterProducts().map(
            function(item){
                return <Product 
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                category={item.category}/>
            }
        )}
    </div>
  )
}

export default Homepage;


// export default function Homepage(){
//     return (
//         <div>Homepage</div>
//     )
// }

// products.filter(
//     item=> props.productSearchValue === ''? 
//     item : 
//     item.title.toLowerCase().includes(props.productSearchValue.toLowerCase()) ? item : null
// )
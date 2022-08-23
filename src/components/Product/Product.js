import './Product.css';

function Product(props){
    console.log(props);
    return(
        <div>
            <h1>{props.title}</h1>
            <p>Price: {props.price}</p>
            <p>Category: {props.category}</p>
            <img className='product-image' src={props.image} alt={props.title} />
        </div>
    )
}

export default Product;
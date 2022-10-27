import './Product.css';
import {Link} from 'react-router-dom';

function Product(props){
    //console.log(props);
    return(
        <Link to={`/products/${props.id}`}>
        <div className="product-card">
            <h4>{props.title}</h4>
            <p>Price: {props.price}</p>
            <p>Category: {props.category}</p>
            <img className='product-image' src={props.image} alt={props.title} />
        </div>
        </Link>
    )
}

export default Product;
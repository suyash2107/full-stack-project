import React from "react";
import "./ProductCards.css";
import {Link} from 'react-router-dom'

function ProductCards({id, name, price, description, image}) {
    return(
        <div className="product-card">
           <img src={image} alt={name} className="product-card-image"/>
           <h2>{name}</h2>
           <h1>₹{price}</h1>
           <p>{description}</p>
           <Link className="btn-buy-now" to={`buy/${id}`}>Buy Now</Link>

           
        </div>
    )
}

export default ProductCards
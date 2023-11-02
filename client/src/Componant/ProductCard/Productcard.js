import React from 'react'
import'./Productcard.css'
import { Link } from 'react-router-dom'
function Productcard({id,name, description,Image,price}) {
  return (
    <div className='product-card'>
      <div className='product-card-image'>
      <img src={Image} alt={name} className="product-card-img" />
      </div>
      <p className="product-card-name">{name}</p>
      <p className="product-card-description">{description}</p>
      <p className="product-card-price">₹ {price}</p>
     
     <div className="product-card-button">
      <Link to={`/buy/${id}`}type="button" className="product-card-btn">Buy Now</Link>
      </div> 
      
    </div>
  )
}

export default Productcard


import React from 'react'
import'./Productcard.css'
function Productcard({name, description,Image,price}) {
  return (
    <div className='product-card'>
      <div className='product-card-image'>
      <img src={Image} alt={name} className="product-card-img" />
      </div>
      <p className="product-card-name">{name}</p>
      <p className="product-card-description">{description}</p>
      <p className="product-card-price">₹ {price}</p>
     
      <div className="product-card-button">
      <button type="button" className="product-card-btn">Buy Now</button>
      </div>
      
    </div>
  )
}

export default Productcard
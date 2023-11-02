import React, { useState, useEffect } from 'react'
import Navbar from '../../Componant/Navbar/Navbar'
import Productcard from '../../Componant/ProductCard/Productcard'
import axios from 'axios'
import "./home.css"
function Home() {
  const [products, setProduct] = useState([]);

  const loadProducts = async () => {

    try {
      const response = await axios.get('/products');
      setProduct(response?.data?.data);
    } catch (err) {
      console.log(err);
      alert('Error loading products');
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className='products-container'>

        {
          products?.map((product, index) => {
            const {_id,name, description, Image, price } = product;

            return (<Productcard
              key={index}
              name={name}
              description={description}
              Image={Image}
              price={price}
              id={_id}
            />);
          })
        }

      </div>

    </>

  )
}

export default Home
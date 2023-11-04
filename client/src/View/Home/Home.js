import React, { useState, useEffect } from 'react'
import Navbar from '../../Componant/Navbar/Navbar'
import Productcard from '../../Componant/ProductCard/Productcard'
import axios from 'axios'
import "./home.css"


function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')

  const searchProducts = async () =>{
    if(search === ''){
      loadProducts();
      return;
    }
    const response = await axios.get(`products/search?q=${search}`);
    setProducts(response?.data?.data);
  }

  useEffect( () =>{
    searchProducts();
  },[search])

  const loadProducts = async () => {

    try {
      const response = await axios.get('/products');
      setProducts(response?.data?.data);
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
      <input type="text"
        placeholder="search products"
        className='product-search'
        value={search}
        onChange={(e) => {setSearch(e.target.value) }
        }
      />
      <div className='products-container'>

        {
          products?.map((product, index) => {
            const { _id, name, description, Image, price } = product;

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
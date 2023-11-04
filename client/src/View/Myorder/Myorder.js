import React, { useEffect, useState } from 'react'
import './myorder.css'
import Navbar from '../../Componant/Navbar/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

 const STATUS_BADGE_COLOR_MAP ={
  "pending":"badge-danger",
  "shipped":"badge-warning",
  "delivered":"badge-success"
 }


function Myorder() {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const userId = user._id;
    if (!userId) {
      return;
    }

    const response = await axios.get(`/orders/user/${userId}`);
    setOrders(response?.data?.data);
  }

  useEffect(() => {
    loadOrders();
  }, [user]);


  useEffect(() => {
    const storageUse = JSON.parse(localStorage.getItem("user") || "{}");
    if (storageUse?.email) {
      setUser(storageUse);
    }
    else {
      alert('You are not logged in');
      window.location.href = '/signup';
    }

  }, [])

  return (
    <div>
      <Navbar />
      <h2>This is Myorder Page</h2>
      <div className='order-container'>
        {
          orders.map((order, index) => {
            const { product, quantity, status, shipingcharge} = order;
            return (
              <div className='order-card'>
                <Link to={`/buy/${product?._id}`} className='order-name'>{product.name}</Link>
                <h3>{product.price} * {quantity} = ₹ {product.price * quantity}</h3>
                <h3>Delivery Charge : ₹ {shipingcharge}</h3>
                <p className={`order-status ${STATUS_BADGE_COLOR_MAP[status]}`}>{status}</p>

              </div>
            )

          })
        }
      </div>


    </div>
  )
}

export default Myorder
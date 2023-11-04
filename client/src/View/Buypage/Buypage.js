import React, { useState, useEffect } from 'react'
import "./Buyorder.css"
import Navbar from '../../Componant/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Buypage() {
    const { id } = useParams()
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [address, setAddress] = useState('');

    const loadProduct = async () => {
        if (!id) {
            return;
        }

        const response = await axios.get(`/product/${id}`);
        setProduct(response?.data?.data);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity === 1) {
            return
        }
        setQuantity(quantity - 1);
    }

    const placeorder = async () => {

        const currentUser = JSON.parse(localStorage.getItem('user') || "{}");

        const orderDetails = {
            user:currentUser._id,
            product:id,
            quantity: quantity,
            address: address
        }

        const response = await axios.post('/order', orderDetails);
        alert(response?.data?.message);
        if (response?.data?.success) {
            window.location.href = "/myorder";
        }
    }

    useEffect(() => {
        loadProduct();

    }, []);



    return (
        <>
            <Navbar />
            <div className='buypage-container'>
                <div className="buypage-image">
                    <img src={product.Image} className='buypage-img' />
                </div>

                <div className="buypage-product-iformation">
                    <p className="buypage-name">{product.name}</p>
                    <p className=" buypage-description">{product.description}</p>
                    <p className=" buypage-price">₹{product.price} /-</p>
                    <div className='quantity-btn'>
                        <p ><span className='dec-btn'
                            onClick={decreaseQuantity}> - </span>

                            <span className='quantity'>{quantity}</span>

                            <span className='inc-btn'
                                onClick={increaseQuantity}>+</span>
                        </p>
                    </div>

                </div>

                <div className="buypage-user-iformation">
                    <input type="text"
                        placeholder='enter your address'
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }}
                        className="address-input"
                    />

                    <button type='button'
                        className='product-card-btn'
                        onClick={placeorder}>
                        Place order
                    </button>
                </div>
            </div>

        </>
    )
}

export default Buypage
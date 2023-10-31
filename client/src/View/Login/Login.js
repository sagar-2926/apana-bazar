import { useState ,useEffect } from 'react'
import React from 'react'
import './Login.css'
import Navbar from '../../Componant/Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = async () =>{
  const response = await axios.post("./login" ,{
    email: email,
    password: password
  });
 
  alert(response?.data?.message);
  if(response?.data?.success){
    localStorage.setItem("user", JSON.stringify(response?.data?.data));
    window.location.href ="./";
  }



    }

    useEffect(() =>{
        const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
        if(storageUser?.email){
            alert("You have already logged in");
            window.location.href='/'
        }
    },[])

    return (
        <div>
            < Navbar />
            <form className='login-form'>
                <h1 className='text-center'>Login</h1>

                <div>
                    <label htmlFor='email'>Email : </label>
                    <input type='text'
                        className='signup-input'
                        placeholder='Enter your email'
                        id='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor='password'>password : </label>
                    <input type='password'
                        className='signup-input'
                        placeholder='Enter your name'
                        id='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                </div>
               
               <button 
               type='button'
                className='login-btn'
                onClick={Login}
               >
               Login</button>


              <p className='text-right signup-link'>
             <Link to='/signup' >Create a New Account</Link>
             </p>


            </form>
        </div>
    )
}

export default Login
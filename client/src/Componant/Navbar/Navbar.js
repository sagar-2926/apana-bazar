import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
   
   const [user ,setUser] = useState({});
    
   useEffect(()=>{
    const storageUse = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(storageUse);
   },[])



    return (
        <div className='navbar'>
            <Link to='/' className='app-title'>
                Apana Bazar
            </Link>
            <div className='navbar-links'>
                <Link to='/login' className='navbar-link'>
                    Login
                </Link>

                <Link to='/signup' className='navbar-link'>
                    SignUp
                </Link>

                <Link to='/myorder' className='navbar-link'>
                    Myorder
                </Link>

            </div>
           <div>
            Hello,{user.name || "user"}
           {
            user?.name ?
            ( <span className="logout" onClick={()=>{
             localStorage.removeItem('user');
             window.location.href="/login";
            }}>
            LogOut
            </span>)
            :null  
           }
           </div>
           

        </div>
    )
}

export default Navbar
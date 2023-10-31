import React,{useEffect, useState} from 'react'

import Navbar from '../../Componant/Navbar/Navbar'
function Myorder() {
const [user,setUser] = useState({});
  useEffect(() =>{
    const storageUse = JSON.parse(localStorage.getItem("user") || "{}");
    if(storageUse?.email){
      setUser(storageUse);
    }
    else{
      alert('You are not logged in');
      window.location.href='/signup';
    }
    
},[])
  return (
    <div>
  <Navbar />
  <h2>This is Myorder Page</h2>


    </div>
  )
}

export default Myorder
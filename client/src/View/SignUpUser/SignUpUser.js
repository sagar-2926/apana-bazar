import React, { useState } from 'react'
import './SignUpUser.css'
import axios from 'axios';
function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("male");
     
    const signup = async () => {
        if (!name){
            alert("Name required");
            return;
        }
        if (!email){
            alert("Email required");
            return;
        }
        if (!password){
            alert("Password required");
            return;
        }
        if (!mobile){
            alert("Mobile required");
            return;
        }
        if (!address){
            alert("Address required");
            return;
        }

        const response = await axios.post ("/Signup", {
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            address: address,
            gender: gender
        })

        alert(response.data?.message);
        if (response?.data?.sussecc){
            window.location.href = "/Login";
        }
    }   

    return (
        <>
            <div className='signup-form'>
                <h1 className='text-center'> SignUp </h1>
                <div>
                    <label htmlFor='name'>Name : </label>
                    <input type='text'
                        className='signup-input'
                        placeholder='Enter your name'
                        id='name'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>
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
                    <input type='text'
                        className='signup-input'
                        placeholder='Enter your name'
                        id='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor='mobile'>mobile : </label>
                    <input type='text'
                        className='signup-input'
                        placeholder='Enter your mobile'
                        id='mobile'
                        value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor='address'>address : </label>
                    <input type='text'
                        className='signup-input'
                        placeholder='Enter your address'
                        id='address'
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                </div>
                <div>
                    <input
                        type='radio'
                        id='male'
                        name='gender'
                        className='gender'
                        checked={gender === "male"}
                        onClick={()=>{
                            setGender("male");
                        }}
                         />
                    <label htmlFor='male'>Male</label>

                    <input
                        type='radio'
                        id='female'
                        name='gender'
                        className='gender'
                        checked={gender ==="female"} 
                        onClick={()=>{
                            setGender("female");
                        }}
                        />
                    <label htmlFor='female'>Female</label>
                </div>

                    <button type='button' 
                    className="signup-btn"
                     onClick={signup}>
                     SignUp</button>



            </div>

        </>
    )
}

export default Signup
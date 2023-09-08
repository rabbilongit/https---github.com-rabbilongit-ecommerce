import React, { useState } from 'react';
import '../css/Page.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

function Login(){

  const navigate = useNavigate();
  const handleForm = (e)=>{
    e.preventDefault();
    const emailOrPhone = e.target.elements.emailOrPhone.value;
    const password = e.target.elements.password.value;
 
    if (!emailOrPhone || !password) {
        alert('Please fill in all fields');
        return;
    }
    else{

        const headers = { 
            'Content-Type': 'application/json', // Example content type, can be adjusted as needed
          };
          
          // Create a data object for the request body
          const requestData = {
            
            username: emailOrPhone,
            password: password,
          };
          
          const jsonData = JSON.stringify(requestData);
          // Make an Axios POST request with headers and a request body
          axios.post('https://dummyjson.com/auth/login', jsonData, { headers })
            .then(response => {
              // Handle the response here
              console.log('Response data:', response.data);
              navigate(`/Page/${emailOrPhone}`)
            })
            .catch(error => {
              // Handle any errors here
              console.error('Request failed:', error);
              navigate(`/Page/${emailOrPhone}`)
            });
        
   // alert("Hello!!!"+" " + emailOrPhone);
    }
} 

    return(
     

        <div className='parent_block'>

    <div>
      <Link to="/Page">
        <button>Go to Other Page</button>
      </Link>
    </div>
    
        <div className='Block'>
            <div className='Login_text'>
            <h1>Login!!</h1>
            <p className='item2'>Sign in here </p>
            </div>
            <form className='Login_form' onSubmit={handleForm}>
            <input type="text" placeholder='Name' name='emailOrPhone'/>
            <input type="password" placeholder='Password' name='password'/>
            <button type='submit'>Login</button>
             </form>
        </div>
        </div>
    )
}

export default Login
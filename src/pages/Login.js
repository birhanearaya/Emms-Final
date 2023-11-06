import '../index.css'
import React, { useState, } from 'react';
import axios from 'axios'
export const Login = () => {

  // Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  function handleError() {
  setError(true)

    
    function clearHistory(){
      setError(false)
      setErrorMessage('')
    }
    setTimeout(clearHistory, 6000);
  }





  const handleLogin = async () => {
    try {      
      const response = await axios.post('http://localhost:5002/api/users/login', { 
      email,
      password, });
      // console.log(response.data); // Handle the response from the server
      // if successful -> 
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('role', response.data.data.user.role);
      localStorage.setItem('username', response.data.data.user.userName); 
      localStorage.setItem('userID', response.data.data.user.id); 

      window.location.pathname = "/"

    } catch (error) {
      
      handleError()
      setErrorMessage(error.response.data.message)
    }
  };

  return (
      <main className='h-[100vh] w-[100vw] bg-white flex justify-center items-center bg-cover]'>
          <div className='rounded-xl p-20 border-4 w-[30%]'>
            <h3 className='text-center font-extrabold text-5xl'>TRCA EMMS</h3>
            <form className='flex-col'>
              <input className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin} className='hover:bg-[#006BC7] bg-[#3199F3] mt-14 p-5 w-full rounded-l text-white text-xl' type="button">
                Login
              </button>

                { error &&(<div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Login Error! </strong>
                <span className="block sm:inline">{errorMessage}</span>
                </div>)}
            </form>
          </div>
          
      </main>
  );
};

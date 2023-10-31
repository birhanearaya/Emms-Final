import '../index.css'
import React, { useState } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export const Signup = () => {
  // signup
  const  [userName, setUserName] = useState('');
  const  [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState('')
  const [succesMessage, setSuccessMessage] = useState('')


//Error
  function handleError() {
  setError(true)

    function clearHistory(){
      setError(false)
      setErrorMessage('')
    }
    setTimeout(clearHistory, 6000);
  }

//Success
   function handleSucces() {
  setSuccessMessage(true)
  setSuccessMessage('You have signed up successfully.')
  setSuccess(true)

    function clearHistory(){
      setSuccess(false)
      setSuccessMessage('')
    }
    function redirect(){
     window.location.pathname = "/"
    }
    setTimeout(redirect, 5000);
    setTimeout(clearHistory, 5000);

    
  }



  const handleSignup = async () => {
    try {
      
      const response = await axios.post('http://localhost:5002/api/users/signup', { userName,
      email,
      role,
      password,
      passwordConfirm, });
      console.log(response.data); // Handle the response from the server
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('role', response.data.data.user.role); 
      handleSucces()

    } catch (error) {
      console.log(error.response.data.error.statusCode, error.response.data.message); 
      handleError()
      setErrorMessage(error.response.data.message)
    }
  };

  return (
    
     <main className='h-[100vh] w-[100vw] bg-white flex justify-center items-center bg-cover]'>
          <div className='rounded-xl p-20 border-4 w-[30%]'>
            <h3 className='text-center font-extrabold text-5xl'>TRCA EMMS</h3>
            <h1 className='text-center font-bold mt-8 text-2xl text-gray-800'>Signup</h1>
            <form onSubmit={handleSignup} className='flex-col'>
              <input required className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input required className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <select required value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'>Role<FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
                <option disabled value="">Role</option>
                <option value="eqAdmin">Equipment Registrar</option>
                <option value="inspector">Inspector</option>
                <option value="mechanic">Mechanic</option>
              </select>
              <input required className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input required className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="password"
                placeholder="confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <button className='hover:bg-[#006BC7] bg-[#3199F3] mt-10 mb-3 p-5 w-full rounded-l text-white text-xl' type="button" onClick={handleSignup}>
                Signup
              </button>


              { error &&(<div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Login Error! </strong>
                <span className="block sm:inline">{errorMessage}</span>
                </div>)}

              { success &&(<div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                  <div class="flex">
                      <div>
                        <p class="font-bold">Success</p>
                        <p class="text-sm">{succesMessage}</p>
                        
                      </div>
                  </div>
                </div>
                )}  
              <h3 className='mt-5 text-xl text-center text-[#3199F3] hover:underline'><a href='/'>Login </a></h3>  
            </form>
          </div>
    </main>
  );
};

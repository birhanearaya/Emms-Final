import '../index.css';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Signup = () => {
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  function handleError() {
    setError(true);
  }

  function handleSuccess() {
    setSuccess(true);
  }

  const handleSignup = async () => {
    if (/\d/.test(userName)) {
      setError(true);
      setErrorMessage('Username cannot contain numbers.');
      return;
    }

    try {

        const tk_value = localStorage.getItem('token');    
            const response = await axios({
                method: 'POST',
                url: `http://localhost:5002/api/users/eqAdmin/signup`,
                data: {
                userName: userName,
                email: email,
                role: role,
                password: password,
                passwordConfirm: passwordConfirm
            },
                headers: {
                authorization: 'Bearer ' + tk_value,
            },
        })
      if(response.data.status === 'success'){
        // console.log(response.data.status); 
        handleSuccess()
        setSuccessMessage('You have registered a user successfully.');
        setSuccess(true);
         window.location.pathname = "/Users"
        

      }
    } catch (error) {
      // console.log(error.response.data.error.statusCode, error.response.data.message); 
      handleError()
      setErrorMessage(error.response.data.error.statusCode, error.response.data.message)
      setError(true)
    }
}


  return (
    <main className='h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className='mr-[20%] w-[30%]'>
        <h3 className='text-center font-extrabold text-5xl'>TRCE EMMS</h3>
        <h1 className='text-center font-bold mt-8 text-2xl text-gray-800'>Signup</h1>
        <form className='flex-col'>
          <input
            required
            className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* Rest of the form */}
            <select required value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'>Role<FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
              <option disabled value="">Role</option>
              <option value="eqAdmin">Equipment Registrar</option>
              <option value="inspector">Inspector</option>
              <option value="mechanic">Mechanic</option>
            </select>
            <input required className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <div className='flex flex-row'>
              <button className='hover:bg-red-900 border-2 border-red-500 mt-10  mr-5 mb-3 p-5 w-1/4 rounded-l text-red-500 text-xl' type="button" onClick={() => {
                  window.location.pathname = '/Users';
                }}>
                Back
              </button>
              {passwordConfirm === password && password.length >= 8 ? (
                <button className='hover:bg-[#006BC7] bg-[#3199F3] mt-10 mb-3 p-5 w-3/4 rounded-l text-white text-xl' type="button" onClick={handleSignup}>
                  Signup
                </button>
              ):
              (
                <>
                  <div className="h-full w-full mt-10 mr-5  bg-yellow-100 border border-yellow-400 text-yellow-500-700 px-4 py-3 rounded relative">
                  Your password must be more than 8 charachters and check if password and confirm password match.
                  </div>
                  <button disabled className='disabled:bg-gray-500 hover:bg-[#006BC7] bg-[#3199F3] mt-10 mb-3 p-5 w-3/4 rounded-l text-white text-xl'>
                  Signup
                </button>
                </>

              )}
            </div>

          {/* Error and success messages */}
          {error && (
            <div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Signup error </strong>
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}

          {success && (
            <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div className="flex">
                <div>
                  <p className="font-bold">Signup Successful </p>
                  <p className="text-sm">{successMessage}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};
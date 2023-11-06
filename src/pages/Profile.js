import '../index.css'
import React, { useState } from 'react';
import axios from 'axios'
export const Profile = () => {
  // signup

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fullName = localStorage.getItem('username');
  const userID = localStorage.getItem('userID');


  let [ username, setUsername] = useState('');
  let [ userEmail, setUserEmail] = useState('');
  let [ userPassword, setUserPassword] = useState('');
  let [ confirmUserPassword, setConfirmUserPassword] = useState('');


  function handleError() {
  setError(true)

    
    function clearHistory(){
      setError(false)
      setErrorMessage('')
    }
    setTimeout(clearHistory, 6000);
  }

React.useEffect(() => {
    async function fetchData() {
    const tk_value = localStorage.getItem('token');
    const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/users/me`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
        const { userName, email, password, confirmPassword} = response.data.doc;
        setUsername(userName);
        setUserEmail(email);
        setUserPassword(password);
        setConfirmUserPassword(confirmPassword);
    }
    fetchData();
},[userID]);

const handleChangeUserProfile = async () => {

  try {
    
            const tk_value = localStorage.getItem('token'); 
            const response = await axios({
                method: 'PATCH',
                url: `http://localhost:5002/api/users/updateUser/${userID}`,
                
                data: {
                    userName: username,
                    email: userEmail,
                    password: userPassword,
                },
                headers: {
                authorization: 'Bearer ' + tk_value,
            },
        })
    if(response.data.status === 'success'){
      localStorage.setItem('username', response.data.doc.userName); 
      window.location.pathname = "/"

    }
    } catch (error) {
    handleError()
    setErrorMessage(error.response.data.message)

    }
  };

  return (
    <main className='h-[100vh] w-[100vw] flex justify-center items-center'>
          <div className='mr-[20%] w-[30%]'>
              <h3 className='text-center font-extrabold text-5xl'>Hello {fullName}</h3>
              <h1 className='text-center font-bold mt-8 text-2xl text-gray-800'>Edit Profile</h1>
            <form onSubmit={handleChangeUserProfile} className='flex-col'>
              <input  className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <input className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="password"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <input className='hover:border-[#3199F3] outline-[#3199F3] rounded-l border border-[#E6E6E6]  mt-5 p-5 w-full'
                type="password"
                placeholder="confirm Password"
                value={confirmUserPassword}
                onChange={(e) => setConfirmUserPassword(e.target.value)}
              />
              {confirmUserPassword === userPassword ? (
                <button className='hover:bg-[#006BC7] w-full bg-[#3199F3] mt-10 mb-3 p-5 rounded-l text-white text-xl' type="button" onClick={handleChangeUserProfile}>Save</button>
              ):
              (
                <>
                  <div className="mt-5 bg-yellow-100 border border-yellow-400 text-yellow-500-700 px-4 py-3 rounded relative">
                    Try matching your password!
                  </div>
                  <button disabled className=' disabled:bg-gray-500 hover:bg-[#006BC7] w-full bg-[#3199F3] mt-10 mb-3 p-5 rounded-l text-white text-xl' type="button">Save</button>
                </>

              )}

              { error &&(<div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error </strong>
                <span className="block sm:inline">{errorMessage}</span>
                </div>)}
            </form>
          </div>
    </main>
  );
};

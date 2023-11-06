import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

// const role = localStorage.getItem('role');

export const EditUserModal = ({setOpenEditUserModalFromTable,selectedRowId}) => {
        let [ username, setUsername] = useState('');
        let [ userEmail, setUserEmail] = useState('');
        let [ userRole, setUserRole] = useState('');
        let [ userPassword, setUserPassword] = useState('');
        let [ error, setError] = useState('');
        let [ errorMessage, setErrorMessage] = useState('');




        
React.useEffect(() => {
    async function fetchData() {
    const tk_value = localStorage.getItem('token');
    const response = await axios({
        method: 'GET',
        url: `http://localhost:5002/api/users/${selectedRowId}`,
        headers: {
        authorization: 'Bearer ' + tk_value,
        },
    });
        const { userName, email, role, password} = response.data.doc;
        setUsername(userName);
        setUserEmail(email);
        setUserRole(role);
        setUserPassword(password);
    }
    fetchData();
},[selectedRowId]);


 function handleError() {
  setError(true)

    
    function clearHistory(){
      setError(false)
      setErrorMessage('')
    }
    setTimeout(clearHistory, 6000);
  }



const handleUpdate = async (e) =>{
            e.preventDefault()
            try {
            const tk_value = localStorage.getItem('token'); 
            const response = await axios({
                method: 'PATCH',
                url: `http://localhost:5002/api/users/updateUser/${selectedRowId}`,
                data: {
                    userName: username,
                    role: userRole,
                    email: userEmail,
                    password: userPassword
                },
                headers: {
                authorization: 'Bearer ' + tk_value,
            },
        })
    if(response.data.status === 'success'){
        window.location.pathname = "/Users"

    }
    } catch (error) {
    // console.log(error.response.data.error.statusCode, error.response.data.message); 
    handleError()
    setErrorMessage(error.response.data.message)
      
    }
}

        return (
            // Overlay
            <div className='w-[90vw] h-screen fixed left-[280px] top-0 flex justify-center items-center bg-gray-800 bg-opacity-10'>
                {/* Modal background */}
                <div className='w-3/5 py-6 px-5  border-b rounded-2xl bg-white'>
                    {/* Model content container */}
                    <div className='w-full h-full rounded-xl'>
                        {/* Modal Header */}
                        <div className='m5 w-full h-10 border-b'>
                            <h1 className='float-left text-xl font-extrabold'>Update equipment</h1>
                            <button className='float-right' onClick={()=> setOpenEditUserModalFromTable(false)}><FontAwesomeIcon className=' text-red-500 w-7 h-7' icon={faXmarkCircle}/></button>
                        </div>
                        <div className='w-full m5'>
                            {/* Form */}
                            <form className='p-5'>
                                <div className='w-full flex flex-wrap'>
                                        <>
                                            <div className='text-left w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                            <label className='my-3 text-lg text-gray-600'>Username</label>
                                            <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
                                            </div>
                
                
                                            <div className='text-left w-full md:w-1/2 px-3'>
                                                <label className='text-left my-3 text-lg text-gray-600'>Email</label>
                                                <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type='text' placeholder='Email'></input>
                                            </div>
                                            <div className='text-left w-full md:w-1/3 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Role</label>
                                                <select required value={userRole} onChange={(e) => setUserRole(e.target.value)} className='w-full h-12 flex border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800'><FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
                                                    <option value="" disabled> Role</option>
                                                    <option value="eqAdmin">Eq Admin</option>
                                                    <option value="inspector">Inspector</option>
                                                    <option value="mechanic">Mechanic</option>
                                                    
                                                </select>
                                            </div>
                                            <div className='text-left w-full md:w-1/3 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Password</label>
                                                <input type="password" className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' onChange={(e) => setUserPassword(e.target.value)} placeholder='**********'></input>
                                            </div>
                                        </>
                                        <div className='w-full md:w-1/1 px-3'>
                                            <button className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' type='buuton' onClick={handleUpdate} >Update</button>
                                        </div>
                                </div>
                            </form>
                            { error &&(<div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error </strong>
                            <span className="block sm:inline">{errorMessage}</span>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
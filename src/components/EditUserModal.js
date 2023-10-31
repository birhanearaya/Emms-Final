import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

const role = localStorage.getItem('role');

export const EditUserModal = ({setOpenEditUserModalFromTable,selectedRowId}) => {
        let [ username, setUsername] = useState('');
        let [ userEmail, setUserEmail] = useState('');
        let [ userRole, setUserRole] = useState('');
        
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
        const { userName, email, role } = response.data.doc;
        setUsername(userName);
        setUserEmail(email);
        setUserRole(role);
    }
    fetchData();
  },[selectedRowId]);


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
                },
                headers: {
                authorization: 'Bearer ' + tk_value,
            },
        })
    if(response.data.status === 'success'){
        window.location.pathname = "/Users"

    }
    } catch (error) {
    console.log(error.response.data.error.statusCode, error.response.data.message); 
      // Handle any errors that occur during the request
    }
}

        return (
            // Overlay
            <div className='w-[1650px] h-screen fixed left-[280px] top-0 flex justify-center items-center bg-black bg-opacity-50'>
                {/* Modal background */}
                <div className='w-3/5 py-6 px-5  border-b rounded-2xl bg-white shadow-lg'>
                    {/* Model content container */}
                    <div className='w-full h-full rounded-xl'>
                        {/* Modal Header */}
                        <div className='m5 w-full h-10 border-b'>
                            <h1 className='float-left text-xl font-extrabold'>Update equipment</h1>
                            <button className='float-right' onClick={()=> setOpenEditUserModalFromTable(false)}><FontAwesomeIcon className=' text-red-500 w-7 h-7' icon={faXmarkCircle}/></button>
                        </div>
                        <div className='w-full m5'>
                            {/* Form */}
                            <form onSubmit={handleUpdate} className='p-5'>
                                <div className='w-full flex flex-wrap'>
                                        <>
                                            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                                            <label className='my-3 text-lg text-gray-600'>Username</label>
                                            <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
                                            </div>
                
                                            <div className='w-full md:w-1/3 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Role</label>
                                                <select required value={role} onChange={(e) => setUserRole(e.target.value)} className='w-full h-12 flex border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800'><FontAwesomeIcon className='pl-44 justify-center items-center pt-1' icon={faChevronDown}/>
                                                    <option value="" disabled> Role</option>
                                                    <option value="eqAdmin">Eq Admin</option>
                                                    <option value="inspector">Inspector</option>
                                                    <option value="mechanic">Mechanic</option>
                                                    
                                                </select>
                                            </div>
                
                                            <div className='w-full md:w-1/3 px-3'>
                                                <label className='my-3 text-lg text-gray-600'>Email</label>
                                                <input required className='w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type='text' placeholder='Email'></input>
                                            </div>
                                        </>
                                    <div className='w-full md:w-1/1 px-3'>
                                        <button className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' type='text'>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
function ApprovalsModal({setOpenApprovalsModal}) {
        const [ remark, setRemark] = useState('');

        const handleSubmit = (e) =>{
            e.preventDefault()
            const registration ={remark}
            console.log(registration); //This is where the write to DB will go
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
                            <h1 className='float-left text-xl font-extrabold'>Approve equipment maintenance</h1>
                            <button className='float-right' onClick={()=> setOpenApprovalsModal(false)}><FontAwesomeIcon className=' text-red-500 w-7 h-7' icon={faXmarkCircle}/></button>
                        </div>
                        
                        <div className='w-full m5'>
                            <form onSubmit={handleSubmit} className='p-5'>
                                <div className='w-full flex flex-wrap'>
                                    <div className='w-full md:w-1/1 px-3'>
                                        <label className='my-3 text-lg text-gray-600'>Remark</label>
                                        <textarea maxlength="250" className='h-56 w-full border rounded-md border-gray-400 py-2 px-3 my-3 text-lg text-gray-800' value={remark} onChange={(e) => setRemark(e.target.value)} type='text' placeholder='Write a description, memo or a remark...'></textarea>
                                    </div>
        
                                    <div className='w-full md:w-1/1 px-3'>
                                        <button className='w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-5 my-3' type='text'>Add</button>
                                    </div>
                                    <p>{remark}</p>
        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ApprovalsModal